// src/pages/TestConfig.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TestConfig = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState("english");
    const [mode, setMode] = useState("questions");
    const [questionCount, setQuestionCount] = useState("50");
    const [customQuestions, setCustomQuestions] = useState("");
    const [timeLimit, setTimeLimit] = useState("30");
    const [customTime, setCustomTime] = useState("");
    let config = {};
    const handleSubmit = (e) => {
        e.preventDefault();
        config = { language, mode };
        if (mode === "questions" || mode === "both") {
            const questions = questionCount === "custom" ? parseInt(customQuestions) : parseInt(questionCount);
            if (!questions || questions <= 0) {
                alert("Enter valid number of questions.");
                return;
            }
            config.questionCount = questions;
        }

        if (mode === "time" || mode === "both") {
            const time = timeLimit === "custom" ? parseInt(customTime) : parseInt(timeLimit);
            if (!time || time <= 0) {
                alert("Enter valid time in minutes.");
                return;
            }
            config.timeLimit = time;
        }
        console.log(config)
        navigate("/test", { state: config });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white/30 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-white/20 animate-fade-in">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🎯 Configure Your Test</h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* LANGUAGE */}
                    <div>
                        <p className="mb-2 text-lg font-semibold text-gray-700">Choose Language:</p>
                        <div className="flex gap-4">
                            {["english", "hindi"].map((lang) => (
                                <div key={lang} onClick={() => setLanguage(lang)}
                                    className={`cursor-pointer flex-1 px-4 py-3 rounded-xl border text-center transition-all duration-200 ${language === lang
                                        ? "bg-blue-600 text-white border-blue-700 shadow-lg scale-[1.02]"
                                        : "bg-white text-gray-700 hover:bg-blue-100 border-gray-300"}`}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</div>
                            ))}
                        </div>
                    </div>
                    {/* MODE */}
                    <div>
                        <p className="mb-2 text-lg font-semibold text-gray-700">Select Mode:</p>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: "questions", label: "Questions Only" },
                                { value: "time", label: "Time Only" },
                                { value: "both", label: "Both" }].map(({ value, label }) => (
                                    <div key={value} onClick={() => setMode(value)} className={`cursor-pointer px-4 py-3 rounded-xl border text-center transition-all duration-200 
                                        ${mode === value ? "bg-indigo-600 text-white border-indigo-700 shadow-lg scale-[1.02]"
                                            : "bg-white text-gray-700 hover:bg-indigo-100 border-gray-300"}`}>{label}</div>
                                ))}
                        </div>
                    </div>

                    {/* QUESTIONS */}
                    {(mode === "questions" || mode === "both") && (
                        <div>
                            <p className="mb-2 text-lg font-semibold text-gray-700">Number of Questions:</p>
                            <div className="grid grid-cols-4 gap-4">
                                {["25", "50", "100", "custom"].map((val) => (
                                    <div key={val} onClick={() => setQuestionCount(val)} className={`cursor-pointer px-4 py-3 rounded-xl border text-center transition-all duration-200 
                                        ${questionCount === val ? "bg-green-600 text-white border-green-700 shadow-lg scale-[1.02]"
                                            : "bg-white text-gray-700 hover:bg-green-100 border-gray-300"
                                        }`}> {val === "custom" ? "Custom" : val}
                                    </div>
                                ))}
                            </div>
                            {questionCount === "custom" && (
                                <input type="number" min="1" value={customQuestions} onChange={(e) => setCustomQuestions(e.target.value)} placeholder="Enter custom number"
                                    className="mt-4 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition-all" />
                            )}
                        </div>
                    )}

                    {/* TIME */}
                    {(mode === "time" || mode === "both") && (
                        <div>
                            <p className="mb-2 text-lg font-semibold text-gray-700">Select Time Limit:</p>
                            <div className="grid grid-cols-4 gap-4">
                                {["30", "60", "120", "custom"].map((val) => (
                                    <div key={val} onClick={() => setTimeLimit(val)} className={`cursor-pointer px-4 py-3 rounded-xl border text-center transition-all duration-200 
                                        ${timeLimit === val ? "bg-purple-600 text-white border-purple-700 shadow-lg scale-[1.02]"
                                            : "bg-white text-gray-700 hover:bg-purple-100 border-gray-300"}`}>
                                        {val === "custom" ? "Custom" : val === "30" ? "30 min" : val === "60" ? "1 hr" : "2 hr"}
                                    </div>
                                ))}
                            </div>
                            {timeLimit === "custom" && (
                                <input type="number" min="1" value={customTime} onChange={(e) => setCustomTime(e.target.value)} placeholder="Enter custom time (min)"
                                    className="mt-4 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition-all" />
                            )}
                        </div>
                    )}
                    {/* SUBMIT */}
                    <button type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 rounded-xl mt-4 shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
                    >🚀 Start Test </button>
                </form>
            </div>
        </div>
    );
};

export default TestConfig;
