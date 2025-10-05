import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/context";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {user,setuser} = useContext(userContext)
  
  // Email format validation
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // Step 1: Submit email
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

  try{
      if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setLoading(false);
      return;
    }
    
    if (name.trim().length <= 2) {
      setError("Please enter a valid name.");
      setLoading(false);
      return;
    }
    const newUser = {name: name, email: email, totalAttempts: 0, correctAnswers: 0 }
    setuser(newUser)
    localStorage.setItem("mathQuizeUser", JSON.stringify(newUser))
    navigate("/test-config");
  }finally{
    setLoading(false)
  }
    
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Login to Math Quiz App
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          {error && <p className="text-red-600 mb-3">{error}</p>}

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Finish Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
