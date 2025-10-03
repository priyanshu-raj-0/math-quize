import { useNavigate } from "react-router-dom";
import { FaCalculator, FaClock, FaLanguage, FaListCheck } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  const features = [
    {
      icon: <FaListCheck className="text-3xl text-blue-600" />,
      title: "Competitive MCQs",
      desc: "Practice real exam-style multiple choice questions.",
    },
    {
      icon: <FaClock className="text-3xl text-purple-600" />,
      title: "Timer & Results",
      desc: "Track time and get instant feedback after every quiz.",
    },
    {
      icon: <FaLanguage className="text-3xl text-amber-600" />,
      title: "Language Support",
      desc: "Available in both Hindi and English languages.",
    },
    {
      icon: <FaCalculator className="text-3xl text-green-600" />,
      title: "Clean Interface",
      desc: "Modern, responsive and distraction-free UI for all devices.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="flex-grow container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2 flex justify-center items-center gap-2">
            <FaCalculator className="text-blue-600 animate-pulse" />
            Math Quiz App
          </h1>
          <p className="text-gray-600 text-lg">
            Your smart companion for competitive exam preparation!
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-default text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={handleStart}
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >🚀 Start Quiz</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © 2025 Math Quiz App | Created by <span className="text-blue-600 font-medium">Mr. Priyanshu Raj</span>
      </footer>
    </div>
  );
};

export default Home;
