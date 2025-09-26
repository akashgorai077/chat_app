import React, { useEffect, useState } from "react";
import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/userthunk";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Typewriter } from "react-simple-typewriter";
import toast from "react-hot-toast";
import chat from "../../assets/chat.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
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
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 px-4 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/4 left-3/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Heading */}
      <div className="mb-8 mt-12 text-center z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
          <img src={chat} alt="App Logo" className="  " />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">
          <Typewriter
            words={["Welcome to WeChat"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </h1>
        <p className="text-white/70 text-lg">
          Connect, chat, and collaborate seamlessly
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-16 flex-1 z-10">
        {/* Lottie Animation */}
        <div className="hidden lg:flex relative w-1/2 items-end justify-center">
          <DotLottieReact
            src="/animation/animation.lottie"
            loop
            autoplay
            className="w-96 h-96 xl:w-[600px] xl:h-[600px] drop-shadow-2xl"
          />
        </div>

        {/* Login Card */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"></div>

          <div className="relative z-10 p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

            {/* Username */}
            <label className="input flex items-center gap-2 w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-3 py-2">
              <FaUser className="text-white/60" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="grow bg-transparent outline-none text-white placeholder-white/60"
              />
            </label>

            {/* Password */}
            <label className="input flex items-center gap-2 w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-3 py-2 relative">
              <FaKey className="text-white/60" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="grow bg-transparent outline-none text-white placeholder-white/60 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </label>

            {/* Forgot Password */}
            <div className="text-right mb-3">
              <Link to="/forgot-password" className="text-sm text-transparent ">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-4 px-6 rounded-xl shadow-lg text-white font-semibold flex items-center justify-center gap-3 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm mt-6 text-white/70">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-300 hover:text-white font-medium transition-colors hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
