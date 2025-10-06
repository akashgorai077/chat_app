import React, { useState, useEffect } from "react";
import { FaUser, FaKey, FaEye, FaEnvelope, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/userthunk";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSignup = async () => {
  if (
    !signupData.fullName ||
    !signupData.username ||
    !signupData.email ||
    !signupData.password ||
    !signupData.confirmPassword ||
    !signupData.gender
  ) {
    toast.error("Please fill in all fields");
    return;
  }

  if (signupData.password !== signupData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  setLoading(true);
  try {
    await dispatch(registerUserThunk(signupData)).unwrap();
    toast.success("Signup successful! Please login.");
    navigate("/login"); 
  } catch {
    toast.error("Signup failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSignup();
  };

return (

  <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-slate-100 to-slate-300 relative overflow-hidden">
    <Navbar />


{/* Animated Background */}
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
  <div className="absolute top-2/3 right-1/4 w-28 h-28 bg-white/5 rounded-full animate-bounce delay-1000"></div>
  <div className="absolute bottom-1/4 left-3/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
</div>

{/* Main Content */}
<div className="flex flex-1 flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 lg:px-20 z-10">
  
  {/* Left Section — Banner + Lottie */}
  <div className="flex flex-col items-start justify-center mt-32 text-left w-full lg:w-1/2 mb-8 lg:mb-0">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
      Create Your Account
    </h1>
    <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-3 max-w-lg">
      Start chatting instantly with friends and connect with people worldwide.
    </p>

    {/* Lottie Animation — only visible on large screens */}
    <div className="hidden lg:flex w-full justify-start mt-10">
      <DotLottieReact
        src="/animation/signup.lottie"
        loop
        autoplay
        className="w-[450px] h-[450px] xl:w-[520px] xl:h-[520px] drop-shadow-2xl"
      />
    </div>
  </div>

  {/* Right Section — Signup Card */}
  <div className="relative w-full max-w-md mb-8 lg:mb-0">
    <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"></div>

    <div className="relative z-10 p-6 sm:p-8 text-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Sign Up</h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          Join our community today and start chatting in seconds.
        </p>
      </div>

      <form className="space-y-4">
        {/* Full Name */}
        <div className="flex items-center px-3 py-2.5 bg-gray-100 border border-slate-400 rounded-lg">
          <FaUser className="text-slate-500 mr-3" />
          <input
            type="text"
            name="fullName"
            value={signupData.fullName}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full bg-transparent outline-none text-black placeholder-slate-400 text-sm"
            placeholder="Full Name"
          />
        </div>

        {/* Username */}
        <div className="flex items-center px-3 py-2.5 bg-gray-100 border border-slate-400 rounded-lg">
          <FaUser className="text-slate-500 mr-3" />
          <input
            type="text"
            name="username"
            value={signupData.username}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full bg-transparent outline-none text-black placeholder-slate-400 text-sm"
            placeholder="Username"
          />
        </div>

        {/* Email */}
        <div className="flex items-center px-3 py-2.5 bg-gray-100 border border-slate-400 rounded-lg">
          <FaEnvelope className="text-slate-500 mr-3" />
          <input
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full bg-transparent outline-none text-black placeholder-slate-400 text-sm"
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="flex items-center px-3 py-2.5 bg-gray-100 border border-slate-400 rounded-lg">
          <FaKey className="text-slate-500 mr-3" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={signupData.password}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full bg-transparent outline-none text-black placeholder-slate-400 text-sm"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-slate-500 hover:text-slate-700"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="flex items-center px-3 py-2.5 bg-gray-100 border border-slate-400 rounded-lg">
          <FaKey className="text-slate-500 mr-3" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full bg-transparent outline-none text-black placeholder-slate-400 text-sm"
            placeholder="Confirm Password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="ml-2 text-slate-500 hover:text-slate-700"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Gender */}
        <div className="flex items-center justify-around w-full mb-2">
          <label className="flex text-slate-500 items-center gap-2 cursor-pointer text-sm">
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={handleInputChange}
              className="radio radio-primary border-gray-400 checked:bg-emerald-500"
            />
            <span>Male</span>
          </label>
          <label className="flex text-slate-500 items-center gap-2 cursor-pointer text-sm">
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={handleInputChange}
              className="radio radio-primary border-gray-400 checked:bg-pink-400"
            />
            <span>Female</span>
          </label>
        </div>

        {/* Signup Button */}
        <button
          type="button"
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition-all font-semibold text-sm shadow-md hover:shadow-lg disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      {/* Login Link */}
      <p className="text-center text-slate-600 mt-3 text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-emerald-600 hover:text-emerald-700 font-medium"
        >
          Sign In
        </Link>
      </p>
    </div>

  </div>
</div>
```

  </div>
);
};

export default Signup;
