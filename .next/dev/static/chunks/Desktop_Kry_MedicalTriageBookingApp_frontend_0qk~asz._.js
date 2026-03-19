(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonRow": "TriageApp-module__vFZMla__buttonRow",
  "buttonRowBetween": "TriageApp-module__vFZMla__buttonRowBetween",
  "cancelButton": "TriageApp-module__vFZMla__cancelButton",
  "cancelWrap": "TriageApp-module__vFZMla__cancelWrap",
  "card": "TriageApp-module__vFZMla__card",
  "container": "TriageApp-module__vFZMla__container",
  "errorBox": "TriageApp-module__vFZMla__errorBox",
  "fieldset": "TriageApp-module__vFZMla__fieldset",
  "infoBox": "TriageApp-module__vFZMla__infoBox",
  "legend": "TriageApp-module__vFZMla__legend",
  "loadingRow": "TriageApp-module__vFZMla__loadingRow",
  "loadingText": "TriageApp-module__vFZMla__loadingText",
  "mono": "TriageApp-module__vFZMla__mono",
  "option": "TriageApp-module__vFZMla__option",
  "optionLabel": "TriageApp-module__vFZMla__optionLabel",
  "options": "TriageApp-module__vFZMla__options",
  "primaryButton": "TriageApp-module__vFZMla__primaryButton",
  "progress": "TriageApp-module__vFZMla__progress",
  "questionTitle": "TriageApp-module__vFZMla__questionTitle",
  "recoBody": "TriageApp-module__vFZMla__recoBody",
  "recoTitle": "TriageApp-module__vFZMla__recoTitle",
  "secondaryButton": "TriageApp-module__vFZMla__secondaryButton",
  "sectionTitle": "TriageApp-module__vFZMla__sectionTitle",
  "slotButton": "TriageApp-module__vFZMla__slotButton",
  "slotButtonSelected": "TriageApp-module__vFZMla__slotButtonSelected",
  "slotList": "TriageApp-module__vFZMla__slotList",
  "spin": "TriageApp-module__vFZMla__spin",
  "spinner": "TriageApp-module__vFZMla__spinner",
  "subTitle": "TriageApp-module__vFZMla__subTitle",
  "title": "TriageApp-module__vFZMla__title",
  "wait": "TriageApp-module__vFZMla__wait",
});
}),
"[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TriageApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const QUESTIONS = [
    {
        prompt: "How would you describe your main symptom?",
        options: [
            {
                label: "Mild discomfort",
                score: 1
            },
            {
                label: "Moderate pain",
                score: 2
            },
            {
                label: "Severe pain",
                score: 3
            }
        ]
    },
    {
        prompt: "How long have you had this symptom?",
        options: [
            {
                label: "Less than 24 hours",
                score: 1
            },
            {
                label: "1–3 days",
                score: 2
            },
            {
                label: "More than 3 days",
                score: 3
            }
        ]
    },
    {
        prompt: "Does the symptom affect your ability to carry out daily activities?",
        options: [
            {
                label: "Not at all",
                score: 1
            },
            {
                label: "Somewhat",
                score: 2
            },
            {
                label: "Significantly",
                score: 3
            }
        ]
    },
    {
        prompt: "Have you experienced this symptom before?",
        options: [
            {
                label: "Yes, and it resolved on its own",
                score: 1
            },
            {
                label: "Yes, and it needed treatment",
                score: 2
            },
            {
                label: "No, this is new",
                score: 3
            }
        ]
    },
    {
        prompt: "Do you have any of the following: fever above 38°C, difficulty breathing, or chest pain?",
        options: [
            {
                label: "None of these",
                score: 1
            },
            {
                label: "One of these",
                score: 2
            },
            {
                label: "Two or more",
                score: 3
            }
        ]
    }
];
const RECOMMENDATION_COPY = {
    Chat: {
        title: "Chat (low risk)",
        body: "Based on your answers, we recommend a chat/tele-triage to discuss symptoms and next steps."
    },
    Nurse: {
        title: "Nurse (medium risk)",
        body: "Based on your answers, we recommend a nurse-led triage to assess you and guide care decisions."
    },
    Doctor: {
        title: "Doctor (higher risk)",
        body: "Based on your answers, we recommend an in-person doctor assessment for prompt evaluation."
    }
};
function parseSlotLocal(slot) {
    // Backend sends ISO_LOCAL_DATE_TIME: "YYYY-MM-DDTHH:mm:ss" (no timezone). Interpret as local time.
    const [datePart, timePart] = slot.split("T");
    const [y, m, d] = datePart.split("-").map((n)=>Number(n));
    const [hh, mm, ss] = timePart.split(":").map((n)=>Number(n));
    return new Date(y, m - 1, d, hh, mm, ss);
}
function formatWaitTimeFromSlot(earliestSlot) {
    const slotDate = parseSlotLocal(earliestSlot);
    const diffMs = slotDate.getTime() - Date.now();
    const mins = Math.max(0, Math.ceil(diffMs / 60_000));
    if (mins >= 60) {
        const hrs = Math.max(1, Math.round(mins / 60));
        return `${hrs} hr${hrs === 1 ? "" : "s"}`;
    }
    return `${mins} min${mins === 1 ? "" : "s"}`;
}
function formatSlotForButton(slot) {
    const d = parseSlotLocal(slot);
    return d.toLocaleString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}
function TriageApp() {
    _s();
    const apiBaseUrl = ("TURBOPACK compile-time value", "http://localhost:8080") ?? "http://localhost:8080";
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [questionIndex, setQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(QUESTIONS.length).fill(null));
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [waitingTime, setWaitingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [waitingTimeLoading, setWaitingTimeLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [waitingTimeError, setWaitingTimeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [assessment, setAssessment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [booking, setBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [homeMeetingSlot, setHomeMeetingSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TriageApp.useMemo[totalScore]": ()=>{
            return answers.reduce({
                "TriageApp.useMemo[totalScore]": (sum, v)=>sum + (v ?? 0)
            }["TriageApp.useMemo[totalScore]"], 0);
        }
    }["TriageApp.useMemo[totalScore]"], [
        answers
    ]);
    const isCurrentAnswerSelected = answers[questionIndex] !== null;
    const resetFlow = ()=>{
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
    const postJson = async (path, body)=>{
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;
        const res = await fetch(`${apiBaseUrl}${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
            signal: controller.signal
        });
        const contentType = res.headers.get("content-type");
        const data = contentType && contentType.includes("application/json") ? await res.json() : null;
        if (!res.ok) {
            const message = (data && typeof data === "object" && "message" in data ? data.message : null) ?? `Request failed with ${res.status}`;
            throw new Error(message);
        }
        return data;
    };
    const loadWaitingTime = async ()=>{
        setWaitingTimeLoading(true);
        setWaitingTimeError(null);
        try {
            // Backend slot availability is independent of score; use a "Doctor" score
            // to show "See a doctor in X".
            const res = await postJson("/assessment", {
                score: 12
            });
            const earliest = res.availableSlots[0];
            setWaitingTime(earliest ? formatWaitTimeFromSlot(earliest) : "soon");
        } catch (e) {
            setWaitingTimeError(e instanceof Error ? e.message : "Unable to fetch waiting time.");
            setWaitingTime("soon");
        } finally{
            setWaitingTimeLoading(false);
        }
    };
    const onBookMeeting = ()=>{
        setError(null);
        setHomeMeetingSlot(null);
        setScreen("questionnaire");
        setQuestionIndex(0);
        setAnswers(Array(QUESTIONS.length).fill(null));
        setAssessment(null);
        setSelectedSlot(null);
        setBooking(null);
    };
    const onSubmitQuestionnaire = async ()=>{
        setError(null);
        setLoading(true);
        try {
            const score = totalScore;
            const res = await postJson("/assessment", {
                score
            });
            setAssessment(res);
            setSelectedSlot(null);
            setScreen("results");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Assessment failed.");
        } finally{
            setLoading(false);
        }
    };
    const onConfirmBooking = async ()=>{
        if (!assessment || !selectedSlot) return;
        setError(null);
        setLoading(true);
        try {
            const res = await postJson("/booking", {
                slot: selectedSlot,
                recommendation: assessment.recommendation
            });
            setBooking(res);
            setHomeMeetingSlot(res.slot);
            setScreen("confirmed");
        } catch (e) {
            setError(e instanceof Error ? e.message : "Booking failed.");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TriageApp.useEffect": ()=>{
            if (screen === "home") {
                // Recompute waiting time when we return home (e.g. after booking).
                loadWaitingTime();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TriageApp.useEffect"], [
        screen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TriageApp.useEffect": ()=>{
            if (screen !== "confirmed") return;
            const t = window.setTimeout({
                "TriageApp.useEffect.t": ()=>{
                    setScreen("home");
                    setBooking(null);
                    setSelectedSlot(null);
                    setAssessment(null);
                    setQuestionIndex(0);
                    setAnswers(Array(QUESTIONS.length).fill(null));
                }
            }["TriageApp.useEffect.t"], 1500);
            return ({
                "TriageApp.useEffect": ()=>window.clearTimeout(t)
            })["TriageApp.useEffect"];
        }
    }["TriageApp.useEffect"], [
        screen
    ]);
    const showCancelFixed = screen !== "home";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            showCancelFixed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                    type: "button",
                    onClick: resetFlow,
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                    lineNumber: 284,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                "aria-busy": loading || waitingTimeLoading,
                children: [
                    loading || waitingTimeLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingText,
                                children: "Loading…"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this) : null,
                    screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: [
                                    "See a doctor in",
                                    " ",
                                    waitingTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wait,
                                        children: waitingTime
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 302,
                                        columnNumber: 30
                                    }, this) : "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            waitingTimeError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorBox,
                                role: "alert",
                                children: waitingTimeError
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this) : null,
                            homeMeetingSlot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoBox,
                                role: "status",
                                "aria-live": "polite",
                                children: [
                                    "Your meeting starts at",
                                    " ",
                                    parseSlotLocal(homeMeetingSlot).toLocaleString(undefined, {
                                        weekday: "short",
                                        month: "short",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 311,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subTitle,
                                children: "Answer 5 quick questions to determine the right level of care."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 322,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonRow,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                    type: "button",
                                    onClick: onBookMeeting,
                                    children: "Book Meeting"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorBox,
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 334,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true),
                    screen === "questionnaire" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                "aria-label": "Progress",
                                children: [
                                    "Question ",
                                    questionIndex + 1,
                                    " of ",
                                    QUESTIONS.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].questionTitle,
                                children: QUESTIONS[questionIndex].prompt
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldset,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legend,
                                        children: "Select one option"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].options,
                                        children: QUESTIONS[questionIndex].options.map((opt)=>{
                                            const checked = answers[questionIndex] === opt.score;
                                            const inputId = `q-${questionIndex}-opt-${opt.score}`;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
                                                htmlFor: inputId,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: inputId,
                                                        type: "radio",
                                                        name: `question-${questionIndex}`,
                                                        checked: checked,
                                                        onChange: ()=>{
                                                            const next = [
                                                                ...answers
                                                            ];
                                                            next[questionIndex] = opt.score;
                                                            setAnswers(next);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionLabel,
                                                        children: opt.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, opt.score, true, {
                                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                                lineNumber: 356,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonRowBetween,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                        type: "button",
                                        onClick: ()=>{
                                            if (questionIndex > 0) setQuestionIndex((i)=>i - 1);
                                        },
                                        disabled: questionIndex === 0,
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this),
                                    questionIndex < QUESTIONS.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                        type: "button",
                                        onClick: ()=>setQuestionIndex((i)=>i + 1),
                                        disabled: !isCurrentAnswerSelected,
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 388,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                        type: "button",
                                        onClick: onSubmitQuestionnaire,
                                        disabled: !isCurrentAnswerSelected,
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorBox,
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 409,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true),
                    screen === "results" && assessment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                "aria-label": "Recommendation",
                                children: "Recommendation"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].recoTitle,
                                children: RECOMMENDATION_COPY[assessment.recommendation]?.title ?? assessment.recommendation
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].recoBody,
                                children: RECOMMENDATION_COPY[assessment.recommendation]?.body ?? "Based on your answers, we recommend the appropriate level of care."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Available booking slots"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this),
                            assessment.availableSlots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoBox,
                                role: "status",
                                children: "No slots found. Please try again later."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 433,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slotList,
                                role: "listbox",
                                "aria-label": "Available slots",
                                children: assessment.availableSlots.slice().sort((a, b)=>parseSlotLocal(a).getTime() - parseSlotLocal(b).getTime()).map((slot)=>{
                                    const selected = selectedSlot === slot;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: selected ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slotButtonSelected : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slotButton,
                                        type: "button",
                                        onClick: ()=>setSelectedSlot(slot),
                                        "aria-pressed": selected,
                                        children: formatSlotForButton(slot)
                                    }, slot, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 444,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 437,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonRowBetween,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                    type: "button",
                                    onClick: onConfirmBooking,
                                    disabled: !selectedSlot || loading,
                                    children: "Confirm Booking"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorBox,
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true),
                    screen === "confirmed" && booking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                "aria-label": "Booking status",
                                children: "Booking confirmed"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 479,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].recoTitle,
                                children: "You are booked."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 482,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoBox,
                                role: "status",
                                children: [
                                    "Confirmation ID: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$src$2f$app$2f$components$2f$TriageApp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mono,
                                        children: booking.confirmationId
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 484,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 485,
                                        columnNumber: 15
                                    }, this),
                                    "Appointment:",
                                    " ",
                                    parseSlotLocal(booking.slot).toLocaleString(undefined, {
                                        weekday: "short",
                                        month: "short",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
_s(TriageApp, "e1YALpnF5wb6RjAOhQnFvlREVgg=");
_c = TriageApp;
var _c;
__turbopack_context__.k.register(_c, "TriageApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_Kry_MedicalTriageBookingApp_frontend_0qk~asz._.js.map