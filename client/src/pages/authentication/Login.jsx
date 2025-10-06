import React, { useEffect, useState } from "react";
import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/userthunk";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    if (!loginData.username || !loginData.password) {
      toast.error("Please enter both username and password");
      return;
    }

    setLoading(true);
    const response = await dispatch(loginUserThunk(loginData));
    setLoading(false);

    if (response?.payload?.success) {
      navigate("/home");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-slate-100 to-slate-300 relative">
      <Navbar />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/4 left-3/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Banner Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 text-left z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
          Welcome Back!
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-xl">
          Sign in to continue your conversations and stay connected effortlessly.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-16 flex-1 mt-10 mb-10 z-10">
        {/* Lottie Animation */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center">
          <DotLottieReact
            src="/animation/login.lottie"
            loop
            autoplay
            className="w-72 h-72 md:w-96 md:h-96 xl:w-[500px] xl:h-[500px] drop-shadow-2xl"
          />
        </div>

        {/* Login Card */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Glass Effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"></div>

          <div className="relative z-10 p-6 sm:p-8 text-white">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Login
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Access your account to start chatting instantly
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Username
                </label>
                <div className="flex items-center w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 border border-slate-400 rounded-lg focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
                  <FaUser className="text-slate-500 mr-2 sm:mr-3" />
                  <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className="w-full bg-transparent outline-none text-black placeholder-slate-400 text-sm sm:text-base"
                    placeholder="username"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <div className="flex items-center w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 border border-slate-400 rounded-lg focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
                  <FaKey className="text-slate-500 mr-2 sm:mr-3" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className="w-full bg-transparent outline-none text-black placeholder-slate-400 text-sm sm:text-base"
                    placeholder="•••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={handleLogin}
                className="w-full bg-emerald-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-emerald-700 transition-all font-semibold text-sm sm:text-base shadow-md hover:shadow-lg"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <p className="text-center text-slate-600 mt-4 sm:mt-6 text-sm sm:text-base">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Login;
