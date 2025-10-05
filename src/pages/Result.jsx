import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const { questions, userAnswers, timeUsed, mode } = state || {};

    const total = questions.length;
    let correct = 0;

    // Compare user answers with correct answers (Ans)
    questions.forEach((q, i) => {
        if (userAnswers[i] && userAnswers[i] === q.Ans) {  // Use "Ans" here
            correct++;
        }
    });

    const attempted = userAnswers.filter(Boolean).length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white rounded-lg p-6 shadow-2xl">

                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">🎉 Test Result</h2>

                <div className="grid grid-cols-2 gap-4 text-lg font-medium text-gray-700 mb-6">
                    <p>Total Questions: {total}</p>
                    <p>Attempted: {attempted}</p>
                    <p>Correct: {correct}</p>
                    {mode !== "questions" && (
                        <p>Time Taken: {Math.floor(timeUsed / 60)} min {timeUsed % 60} sec</p>
                    )}
                </div>

                <hr className="my-4" />

                <h3 className="text-xl font-semibold mb-3">🧐 Question Review:</h3>

                {questions.map((q, i) => (
                    <div key={i} className="mb-4 p-4 rounded bg-gray-50 border">
                        <p className="mb-2 font-semibold">{i + 1}. {q.question}</p>
                        <p className="text-sm">
                            Your Answer: <span className={userAnswers[i] === q.Ans ? "text-green-600" : "text-red-600"}>
                                {userAnswers[i] || "Not Attempted"}
                            </span>
                        </p>
                        <p className="text-sm text-blue-600">Correct Answer: {q.Ans}</p>
                    </div>
                ))}

                <button
                    onClick={() => navigate("/")}
                    className="mt-6 w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
                >
                    🔁 Take Another Test
                </button>
            </div>
        </div>
    );
};

export default Result;
