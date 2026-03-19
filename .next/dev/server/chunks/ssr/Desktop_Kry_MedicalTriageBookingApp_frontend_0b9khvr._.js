module.exports = [
"[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TriageApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './TriageApp.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
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
    const apiBaseUrl = ("TURBOPACK compile-time value", "http://localhost:8080") ?? "http://localhost:8080";
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home");
    const [questionIndex, setQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array(QUESTIONS.length).fill(null));
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [waitingTime, setWaitingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [waitingTimeLoading, setWaitingTimeLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [waitingTimeError, setWaitingTimeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [assessment, setAssessment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [booking, setBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [homeMeetingSlot, setHomeMeetingSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return answers.reduce((sum, v)=>sum + (v ?? 0), 0);
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (screen === "home") {
            // Recompute waiting time when we return home (e.g. after booking).
            loadWaitingTime();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        screen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (screen !== "confirmed") return;
        const t = window.setTimeout(()=>{
            setScreen("home");
            setBooking(null);
            setSelectedSlot(null);
            setAssessment(null);
            setQuestionIndex(0);
            setAnswers(Array(QUESTIONS.length).fill(null));
        }, 1500);
        return ()=>window.clearTimeout(t);
    }, [
        screen
    ]);
    const showCancel = screen !== "home" ? true : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: styles.container,
        children: [
            showCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: styles.cancelWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: styles.cancelButton,
                    type: "button",
                    onClick: resetFlow,
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                    lineNumber: 282,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: styles.card,
                "aria-busy": loading || waitingTimeLoading,
                children: [
                    loading || waitingTimeLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: styles.loadingRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.spinner,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: styles.loadingText,
                                children: "Loading…"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this) : null,
                    screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: styles.title,
                                children: [
                                    "See a doctor in",
                                    " ",
                                    waitingTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: styles.wait,
                                        children: waitingTime
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 300,
                                        columnNumber: 30
                                    }, this) : "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            waitingTimeError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.errorBox,
                                role: "alert",
                                children: waitingTimeError
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 303,
                                columnNumber: 15
                            }, this) : null,
                            homeMeetingSlot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.infoBox,
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
                                lineNumber: 309,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.subTitle,
                                children: "Answer 5 quick questions to determine the right level of care."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 320,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.buttonRow,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: styles.primaryButton,
                                    type: "button",
                                    onClick: onBookMeeting,
                                    children: "Book Meeting"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.errorBox,
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 332,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true),
                    screen === "questionnaire" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.progress,
                                "aria-label": "Progress",
                                children: [
                                    "Question ",
                                    questionIndex + 1,
                                    " of ",
                                    QUESTIONS.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: styles.questionTitle,
                                children: QUESTIONS[questionIndex].prompt
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: styles.fieldset,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        className: styles.legend,
                                        children: "Select one option"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: styles.options,
                                        children: QUESTIONS[questionIndex].options.map((opt)=>{
                                            const checked = answers[questionIndex] === opt.score;
                                            const inputId = `q-${questionIndex}-opt-${opt.score}`;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: styles.option,
                                                htmlFor: inputId,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 355,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: styles.optionLabel,
                                                        children: opt.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, opt.score, true, {
                                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                                lineNumber: 354,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.buttonRowBetween,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: styles.secondaryButton,
                                        type: "button",
                                        onClick: ()=>{
                                            if (questionIndex > 0) setQuestionIndex((i)=>i - 1);
                                        },
                                        disabled: questionIndex === 0,
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this),
                                    questionIndex < QUESTIONS.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: styles.primaryButton,
                                        type: "button",
                                        onClick: ()=>setQuestionIndex((i)=>i + 1),
                                        disabled: !isCurrentAnswerSelected,
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 386,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: styles.primaryButton,
                                        type: "button",
                                        onClick: onSubmitQuestionnaire,
                                        disabled: !isCurrentAnswerSelected,
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 395,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.errorBox,
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 407,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true),
                    screen === "results" && assessment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.progress,
                                "aria-label": "Recommendation",
                                children: "Recommendation"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: styles.recoTitle,
                                children: RECOMMENDATION_COPY[assessment.recommendation]?.title ?? assessment.recommendation
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: styles.recoBody,
                                children: RECOMMENDATION_COPY[assessment.recommendation]?.body ?? "Based on your answers, we recommend the appropriate level of care."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.sectionTitle,
                                children: "Available booking slots"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            assessment.availableSlots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.infoBox,
                                role: "status",
                                children: "No slots found. Please try again later."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 431,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.slotList,
                                role: "listbox",
                                "aria-label": "Available slots",
                                children: assessment.availableSlots.slice().sort((a, b)=>parseSlotLocal(a).getTime() - parseSlotLocal(b).getTime()).map((slot)=>{
                                    const selected = selectedSlot === slot;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: selected ? styles.slotButtonSelected : styles.slotButton,
                                        type: "button",
                                        onClick: ()=>setSelectedSlot(slot),
                                        "aria-selected": selected,
                                        children: formatSlotForButton(slot)
                                    }, slot, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 442,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 435,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.buttonRowBetween,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: styles.secondaryButton,
                                        type: "button",
                                        onClick: resetFlow,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 457,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: styles.primaryButton,
                                        type: "button",
                                        onClick: onConfirmBooking,
                                        disabled: !selectedSlot || loading,
                                        children: "Confirm Booking"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.errorBox,
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 471,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true),
                    screen === "confirmed" && booking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.progress,
                                "aria-label": "Booking status",
                                children: "Booking confirmed"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: styles.recoTitle,
                                children: "You are booked."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.infoBox,
                                role: "status",
                                children: [
                                    "Confirmation ID: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: styles.mono,
                                        children: booking.confirmationId
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 485,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Kry$2f$MedicalTriageBookingApp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                                        lineNumber: 486,
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
                                lineNumber: 484,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/src/app/components/TriageApp.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Kry/MedicalTriageBookingApp/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=Desktop_Kry_MedicalTriageBookingApp_frontend_0b9khvr._.js.map