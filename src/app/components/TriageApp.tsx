"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./TriageApp.module.css";

type Recommendation = "Doctor" | "Nurse" | "Chat";
type Screen = "home" | "questionnaire" | "results" | "confirmed";

type AssessmentResponse = {
  recommendation: Recommendation;
  availableSlots: string[];
};

type BookingResponse = {
  confirmationId: string;
  slot: string;
  recommendation: Recommendation;
};

type QuestionOption = { label: string; score: number };
type Question = { prompt: string; options: QuestionOption[] };

const QUESTIONS: Question[] = [
  {
    prompt: "How would you describe your main symptom?",
    options: [
      { label: "Mild discomfort", score: 1 },
      { label: "Moderate pain", score: 2 },
      { label: "Severe pain", score: 3 },
    ],
  },
  {
    prompt: "How long have you had this symptom?",
    options: [
      { label: "Less than 24 hours", score: 1 },
      { label: "1–3 days", score: 2 },
      { label: "More than 3 days", score: 3 },
    ],
  },
  {
    prompt: "Does the symptom affect your ability to carry out daily activities?",
    options: [
      { label: "Not at all", score: 1 },
      { label: "Somewhat", score: 2 },
      { label: "Significantly", score: 3 },
    ],
  },
  {
    prompt: "Have you experienced this symptom before?",
    options: [
      { label: "Yes, and it resolved on its own", score: 1 },
      { label: "Yes, and it needed treatment", score: 2 },
      { label: "No, this is new", score: 3 },
    ],
  },
  {
    prompt:
      "Do you have any of the following: fever above 38°C, difficulty breathing, or chest pain?",
    options: [
      { label: "None of these", score: 1 },
      { label: "One of these", score: 2 },
      { label: "Two or more", score: 3 },
    ],
  },
];

const RECOMMENDATION_COPY: Record<
  Recommendation,
  { title: string; body: string }
> = {
  Chat: {
    title: "Chat (low risk)",
    body: "Based on your answers, we recommend a chat/tele-triage to discuss symptoms and next steps.",
  },
  Nurse: {
    title: "Nurse (medium risk)",
    body: "Based on your answers, we recommend a nurse-led triage to assess you and guide care decisions.",
  },
  Doctor: {
    title: "Doctor (higher risk)",
    body: "Based on your answers, we recommend an in-person doctor assessment for prompt evaluation.",
  },
};

function parseSlotLocal(slot: string): Date {
  // Backend sends ISO_LOCAL_DATE_TIME: "YYYY-MM-DDTHH:mm:ss" (no timezone). Interpret as local time.
  const [datePart, timePart] = slot.split("T");
  const [y, m, d] = datePart.split("-").map((n) => Number(n));
  const [hh, mm, ss] = timePart.split(":").map((n) => Number(n));
  return new Date(y, m - 1, d, hh, mm, ss);
}

function formatWaitTimeFromSlot(earliestSlot: string): string {
  const slotDate = parseSlotLocal(earliestSlot);
  const diffMs = slotDate.getTime() - Date.now();
  const mins = Math.max(0, Math.ceil(diffMs / 60_000));
  if (mins >= 60) {
    const hrs = Math.max(1, Math.round(mins / 60));
    return `${hrs} hr${hrs === 1 ? "" : "s"}`;
  }
  return `${mins} min${mins === 1 ? "" : "s"}`;
}

function formatSlotForButton(slot: string): string {
  const d = parseSlotLocal(slot);
  return d.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function TriageApp() {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

  const [screen, setScreen] = useState<Screen>("home");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUESTIONS.length).fill(null)
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [waitingTime, setWaitingTime] = useState<string | null>(null);
  const [waitingTimeLoading, setWaitingTimeLoading] = useState(false);
  const [waitingTimeError, setWaitingTimeError] = useState<string | null>(null);

  const [assessment, setAssessment] = useState<AssessmentResponse | null>(
    null
  );
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [booking, setBooking] = useState<BookingResponse | null>(null);

  const [homeMeetingSlot, setHomeMeetingSlot] = useState<string | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  const totalScore = useMemo(() => {
    return answers.reduce<number>((sum, v) => sum + (v ?? 0), 0);
  }, [answers]);

  const isCurrentAnswerSelected = answers[questionIndex] !== null;

  const resetFlow = () => {
    abortRef.current?.abort();
    abortRef.current = null;

    setScreen("home");
    setQuestionIndex(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setAssessment(null);
    setSelectedSlot(null);
    setBooking(null);
    setHomeMeetingSlot(null);
    setError(null);
    setLoading(false);
  };

  const postJson = async <T,>(path: string, body: unknown): Promise<T> => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const res = await fetch(`${apiBaseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    const contentType = res.headers.get("content-type");
    const data =
      contentType && contentType.includes("application/json")
        ? await res.json()
        : null;

    if (!res.ok) {
      const message =
        (data && typeof data === "object" && "message" in data
          ? (data as { message: string }).message
          : null) ?? `Request failed with ${res.status}`;
      throw new Error(message);
    }

    return data as T;
  };

  const loadWaitingTime = async () => {
    setWaitingTimeLoading(true);
    setWaitingTimeError(null);
    try {
      // Backend slot availability is independent of score; use a "Doctor" score
      // to show "See a doctor in X".
      const res = await postJson<AssessmentResponse>("/assessment", { score: 12 });
      const earliest = res.availableSlots[0];
      setWaitingTime(earliest ? formatWaitTimeFromSlot(earliest) : "soon");
    } catch (e) {
      setWaitingTimeError(
        e instanceof Error ? e.message : "Unable to fetch waiting time."
      );
      setWaitingTime("soon");
    } finally {
      setWaitingTimeLoading(false);
    }
  };

  const onBookMeeting = () => {
    setError(null);
    setHomeMeetingSlot(null);
    setScreen("questionnaire");
    setQuestionIndex(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setAssessment(null);
    setSelectedSlot(null);
    setBooking(null);
  };

  const onSubmitQuestionnaire = async () => {
    setError(null);
    setLoading(true);
    try {
      const score = totalScore;
      const res = await postJson<AssessmentResponse>("/assessment", { score });
      setAssessment(res);
      setSelectedSlot(null);
      setScreen("results");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Assessment failed.");
    } finally {
      setLoading(false);
    }
  };

  const onConfirmBooking = async () => {
    if (!assessment || !selectedSlot) return;
    setError(null);
    setLoading(true);
    try {
      const res = await postJson<BookingResponse>("/booking", {
        slot: selectedSlot,
        recommendation: assessment.recommendation,
      });
      setBooking(res);
      setHomeMeetingSlot(res.slot);
      setScreen("confirmed");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Booking failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (screen === "home") {
      // Recompute waiting time when we return home (e.g. after booking).
      loadWaitingTime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  useEffect(() => {
    if (screen !== "confirmed") return;
    const t = window.setTimeout(() => {
      setScreen("home");
      setBooking(null);
      setSelectedSlot(null);
      setAssessment(null);
      setQuestionIndex(0);
      setAnswers(Array(QUESTIONS.length).fill(null));
    }, 1500);
    return () => window.clearTimeout(t);
  }, [screen]);

  const showCancelFixed = screen !== "home";

  return (
    <div className={styles.container}>
      {showCancelFixed && (
        <div className={styles.cancelWrap}>
          <button className={styles.cancelButton} type="button" onClick={resetFlow}>
            Cancel
          </button>
        </div>
      )}

      <main className={styles.card} aria-busy={loading || waitingTimeLoading}>
        {loading || waitingTimeLoading ? (
          <div className={styles.loadingRow}>
            <div className={styles.spinner} aria-hidden="true" />
            <p className={styles.loadingText}>Loading…</p>
          </div>
        ) : null}

        {screen === "home" && (
          <>
            <h1 className={styles.title}>
              See a doctor in{" "}
              {waitingTime ? <span className={styles.wait}>{waitingTime}</span> : "—"}
            </h1>
            {waitingTimeError ? (
              <div className={styles.errorBox} role="alert">
                {waitingTimeError}
              </div>
            ) : null}

            {homeMeetingSlot ? (
              <div className={styles.infoBox} role="status" aria-live="polite">
                Your meeting starts at{" "}
                {parseSlotLocal(homeMeetingSlot).toLocaleString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            ) : (
              <div className={styles.subTitle}>
                Answer 5 quick questions to determine the right level of care.
              </div>
            )}

            <div className={styles.buttonRow}>
              <button className={styles.primaryButton} type="button" onClick={onBookMeeting}>
                Book Meeting
              </button>
            </div>

            {error ? (
              <div className={styles.errorBox} role="alert">
                {error}
              </div>
            ) : null}
          </>
        )}

        {screen === "questionnaire" && (
          <>
            <div className={styles.progress} aria-label="Progress">
              Question {questionIndex + 1} of {QUESTIONS.length}
            </div>

            <h2 className={styles.questionTitle}>{QUESTIONS[questionIndex].prompt}</h2>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Select one option</legend>
              <div className={styles.options}>
                {QUESTIONS[questionIndex].options.map((opt) => {
                  const checked = answers[questionIndex] === opt.score;
                  const inputId = `q-${questionIndex}-opt-${opt.score}`;
                  return (
                    <label key={opt.score} className={styles.option} htmlFor={inputId}>
                      <input
                        id={inputId}
                        type="radio"
                        name={`question-${questionIndex}`}
                        checked={checked}
                        onChange={() => {
                          const next = [...answers];
                          next[questionIndex] = opt.score;
                          setAnswers(next);
                        }}
                      />
                      <span className={styles.optionLabel}>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className={styles.buttonRowBetween}>
              <button
                className={styles.secondaryButton}
                type="button"
                onClick={() => {
                  if (questionIndex > 0) setQuestionIndex((i) => i - 1);
                }}
                disabled={questionIndex === 0}
              >
                Back
              </button>

              {questionIndex < QUESTIONS.length - 1 ? (
                <button
                  className={styles.primaryButton}
                  type="button"
                  onClick={() => setQuestionIndex((i) => i + 1)}
                  disabled={!isCurrentAnswerSelected}
                >
                  Next
                </button>
              ) : (
                <button
                  className={styles.primaryButton}
                  type="button"
                  onClick={onSubmitQuestionnaire}
                  disabled={!isCurrentAnswerSelected}
                >
                  Submit
                </button>
              )}
            </div>

            {error ? (
              <div className={styles.errorBox} role="alert">
                {error}
              </div>
            ) : null}
          </>
        )}

        {screen === "results" && assessment && (
          <>
            <div className={styles.progress} aria-label="Recommendation">
              Recommendation
            </div>

            <h2 className={styles.recoTitle}>
              {RECOMMENDATION_COPY[assessment.recommendation]?.title ??
                assessment.recommendation}
            </h2>
            <p className={styles.recoBody}>
              {RECOMMENDATION_COPY[assessment.recommendation]?.body ??
                "Based on your answers, we recommend the appropriate level of care."}
            </p>

            <div className={styles.sectionTitle}>Available booking slots</div>
            {assessment.availableSlots.length === 0 ? (
              <div className={styles.infoBox} role="status">
                No slots found. Please try again later.
              </div>
            ) : (
              <div className={styles.slotList} role="listbox" aria-label="Available slots">
                {assessment.availableSlots
                  .slice()
                  .sort((a, b) => parseSlotLocal(a).getTime() - parseSlotLocal(b).getTime())
                  .map((slot) => {
                    const selected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        className={selected ? styles.slotButtonSelected : styles.slotButton}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        aria-pressed={selected}
                      >
                        {formatSlotForButton(slot)}
                      </button>
                    );
                  })}
              </div>
            )}

            <div className={styles.buttonRowBetween}>
              <button
                className={styles.primaryButton}
                type="button"
                onClick={onConfirmBooking}
                disabled={!selectedSlot || loading}
              >
                Confirm Booking
              </button>
            </div>

            {error ? (
              <div className={styles.errorBox} role="alert">
                {error}
              </div>
            ) : null}
          </>
        )}

        {screen === "confirmed" && booking && (
          <>
            <div className={styles.progress} aria-label="Booking status">
              Booking confirmed
            </div>
            <h2 className={styles.recoTitle}>You are booked.</h2>
            <div className={styles.infoBox} role="status">
              Confirmation ID: <span className={styles.mono}>{booking.confirmationId}</span>
              <br />
              Appointment:{" "}
              {parseSlotLocal(booking.slot).toLocaleString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

