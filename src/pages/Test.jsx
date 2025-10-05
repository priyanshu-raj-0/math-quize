import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect ,useRef} from "react";
import { testquestions as allQuestionsData } from "../questions/questions";

const Test = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const config = location.state;
    const { language, mode, questionCount, timeLimit } = config;

    // Random Question Picking
    // const randomquestions=(noOfQ, allqarr)=>{
    //     let newarr = []
    //     let allqarrcpy = [...allqarr]
    //     for(let i = 0; i < noOfQ ; i++ ){
    //         let index = Math.floor(Math.random()*allqarrcpy.length)
    //         newarr.push(allqarrcpy[index])
    //         allqarrcpy.splice(index , 1)
    //     }
    //     return newarr
    // }

    // 1️⃣ Questions setup based on mode
    const allQuestions = (mode === "questions" || mode === "both")
        ? allQuestionsData.slice(0, parseInt(questionCount))
        : allQuestionsData;
        console.log(allQuestions)
// allQuestionsData.slice(0, parseInt(questionCount)) randomquestions(parseInt(questionCount),allQuestionsData)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(allQuestions.length).fill(""));
    const [timer, setTimer] = useState(timeLimit ? timeLimit * 60 : null);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [postTimeViewCount, setPostTimeViewCount] = useState(0);
    const currentQuestion = allQuestions[currentIndex];

    // 2️⃣ Timer logic for time and both mode
    useEffect(() => {
        let interval;
        if ((mode === "time" || mode === "both") && timer !== null && !isTimeUp) {
            interval = setInterval(() => {
                setTimer(timer => {
                    if (timer <= 1) {
                        clearInterval(interval);
                        setIsTimeUp(true);
                        return 0;
                    }
                    return timer - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer, mode, isTimeUp]);

    // 3️⃣ Select option
    const handleOptionSelect = (selectedOption) => {
        if (isTimeUp && (mode === "time" || mode === "both")) return;
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentIndex] = selectedOption;
        setUserAnswers(updatedAnswers);
    };

    // 4️⃣ Navigation
    const handlePrevious = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < allQuestions.length - 1) {
            // Time mode: allow only 5 questions after time is up
            if (isTimeUp && mode === "time" && postTimeViewCount >= 5) return;
            setCurrentIndex(currentIndex + 1);
            if (isTimeUp && mode === "time") {
                setPostTimeViewCount(prev => prev + 1);
            }
        }
    };

    // 5️⃣ Submit
    const handleSubmit = () => {
        navigate("/result", {
            state: {
                userAnswers,
                questions: allQuestions,
                timeUsed: timeLimit ? timeLimit * 60 - timer : null,
                config
            }
        });
    };

    // 6️⃣ Format Timer
    const formatTime = (sec) => {
        const m = String(Math.floor(sec / 60)).padStart(2, '0');
        const s = String(sec % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-6 flex justify-center items-center">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
                {/* Header */}
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">
                        🧠 Question {currentIndex + 1} of {allQuestions.length}
                    </h2>
                    {(mode === "time" || mode === "both") && (
                        <span className={`font-mono text-lg ${timer <= 30 ? 'text-red-600' : 'text-gray-700'}`}>
                            ⏳ {formatTime(timer)}
                        </span>
                    )}
                </div>

                {/* Question */}
                <div className="mb-4">
                    <p className="text-lg font-medium text-gray-700 mb-4">{currentQuestion.question}</p>
                    <div className="grid grid-cols-2 gap-4">
                        {currentQuestion.option.map((opt, i) => (
                            <button
                                key={i}
                                onClick={() => handleOptionSelect(opt)}
                                disabled={isTimeUp && (mode === "time" || mode === "both")}
                                className={`border px-4 py-2 rounded-lg transition-all text-left 
                                    ${userAnswers[currentIndex] === opt
                                        ? "bg-green-500 text-white border-green-600"
                                        : "bg-white hover:bg-green-100 text-gray-700 border-gray-300"
                                    }
                                    ${isTimeUp ? "opacity-50 cursor-not-allowed" : ""}
                                `}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:opacity-50"
                    >
                        ⬅ Previous
                    </button>

                    <div className="flex gap-4">
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"
                            disabled={mode === "time" && isTimeUp && postTimeViewCount >= 5}
                        >
                            Next ➡
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-md"
                        >
                            ✅ Submit Test
                        </button>
                    </div>
                </div>

                {(isTimeUp && (mode === "time" || mode === "both")) && (
                    <p className="mt-4 text-sm text-red-600">
                        ⛔ Time is over. You can only review questions now.
                        {mode === "time" && postTimeViewCount >= 5 && (
                            <> | 5-question view limit reached.</>
                        )}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Test;
