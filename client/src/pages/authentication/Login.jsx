

// import React, { useEffect, useState } from "react";
// import { FaUser, FaKey } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUserThunk } from "../../store/slice/user/userthunk";
// import { Typewriter } from "react-simple-typewriter";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import user from "../../assets/user.png";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.userReducer);

//   const [loginData, setLoginData] = useState({ username: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (isAuthenticated) navigate("/");
//   }, [isAuthenticated]);

//   const handleInputChange = (e) => {
//     setLoginData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleLogin = async () => {
//     setLoading(true);
//     const response = await dispatch(loginUserThunk(loginData));
//     setLoading(false);
    

//     if (response?.payload?.success) {
//       navigate("/");
//     }
//   };



// return(

 
//   <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-tl from-gray-950 via-indigo-700 to-gray-900 px-4 py-8 sm:py-10">
//     {/* Heading */}
//     <h1 className="text-xl sm:text-4xl text-white font-bold mb-6 text-center">
//       <Typewriter
//         words={["Welcome to WeChat"]}
//         loop={false}
//         cursor
//         cursorStyle="|"
//         typeSpeed={200}
//         deleteSpeed={50}
//         delaySpeed={15000}
//       />
//     </h1>

//     {/* Main Content */}
//     <div className=" flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-6 lg:gap-12 flex-1">
      
//       {/* Lottie Animation */}
//       <div className="relative w-full lg:w-1/2 flex items-center justify-center lg:items-end lg:justify-start">
//       <DotLottieReact
//       src="/animation/animation.lottie"
//       loop
//       autoplay
//       className="w-72 h-72 sm:w-96 sm:h-96 xl:w-[600px] xl:h-[600px] 
//                lg:mt-10 "
//   />
// </div>


//       {/* Login Card */}
//       <div className="w-full max-w-sm bg-white bg-opacity-10 backdrop-blur-md rounded-3xl px-6 py-6 shadow-lg text-white">
//         <div className="flex justify-center mb-4">
//           <img src={user} alt="User" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
//         </div>

//         {/* Username */}
//         <div className="flex items-center border-b border-white py-2 mb-3">
//           <FaUser className="text-white mr-2" />
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={handleInputChange}
//             className="bg-transparent border-none w-full text-white focus:outline-none placeholder-white"
//           />
//         </div>

//         {/* Password */}
//         <div className="flex items-center border-b border-white py-2 mb-4">
//           <FaKey className="text-white mr-2" />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleInputChange}
//             className="bg-transparent border-none w-full text-white focus:outline-none placeholder-white"
//           />
//         </div>

//         {/* Login Button */}
//         <button
//           onClick={handleLogin}
//           className="btn btn-primary w-full flex items-center justify-center mb-3 gap-2"
//           disabled={loading}
//         >
//           {loading && (
//             <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//           )}
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         {/* Sign Up */}
//         <p className="text-center text-sm font-light">
//           Don’t have an account?&nbsp;
//           <Link to="/signup" className="text-blue-400 underline">
//             Sign up
//           </Link>
//         </p>


 

//       </div>
//     </div>
//   </div>

// )
// };

// export default Login;


// import React, { useEffect, useState } from "react";
// import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUserThunk } from "../../store/slice/user/userthunk";
// import { Typewriter } from "react-simple-typewriter";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.userReducer);

//   const [loginData, setLoginData] = useState({ username: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     if (isAuthenticated) navigate("/");
//   }, [isAuthenticated]);

//   const handleInputChange = (e) => {
//     setLoginData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleLogin = async () => {
//     setLoading(true);
//     const response = await dispatch(loginUserThunk(loginData));
//     setLoading(false);

//     if (response?.payload?.success) {
//       navigate("/");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleLogin();
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 px-4 py-8 sm:py-10 relative">
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000"></div>
//         <div className="absolute bottom-1/4 left-3/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
//       </div>

//       {/* Heading with Typewriter */}
//       <div className="mb-8 text-center z-10">
//         <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-4 shadow-xl animate-pulse">
//           <span className="text-3xl">💬</span>
//         </div>
//         <h1 className="text-2xl sm:text-5xl text-white font-bold mb-2">
//           <Typewriter
//             words={["Welcome to WeChat"]}
//             loop={false}
//             cursor
//             cursorStyle="|"
//             typeSpeed={200}
//             deleteSpeed={50}
//             delaySpeed={15000}
//           />
//         </h1>
//         <p className="text-white/70 text-lg">Connect, chat, and collaborate seamlessly</p>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-16 flex-1 z-10">
        
//         {/* Lottie Animation - Only visible on large screens */}
//         <div className="hidden lg:flex relative w-1/2 items-end justify-start">
//           <DotLottieReact
//             src="/animation/animation.lottie"
//             loop
//             autoplay
//             className="w-96 h-96 xl:w-[600px] xl:h-[600px] lg:mt-10 drop-shadow-2xl"
//           />
//           {/* Decorative elements around animation */}
//           <div className="absolute -top-10 -left-10 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
//           <div className="absolute -bottom-5 -right-5 w-4 h-4 bg-white/30 rounded-full animate-pulse delay-700"></div>
//         </div>

//         {/* Modern Login Card */}
//         <div className="w-full max-w-md relative">
//           {/* Glassmorphism Background */}
//           <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"></div>
          
//           {/* Card Content */}
//           <div className="relative z-10 p-8 text-white">
            
//             {/* App Logo/Icon */}
//             <div className="flex justify-center mb-8">
//               <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/20">
//                 <span className="text-3xl">👤</span>
//               </div>
//             </div>

//             {/* Username Input */}
//             <div className="relative mb-6 group">
//               <label className="block text-sm font-medium mb-2 text-white/90">Username</label>
//               <div className="relative">
//                 <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
//                   <FaUser className="text-white/60 text-sm" />
//                 </div>
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Enter your username"
//                   value={loginData.username}
//                   onChange={handleInputChange}
//                   onKeyPress={handleKeyPress}
//                   className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div className="relative mb-6 group">
//               <label className="block text-sm font-medium mb-2 text-white/90">Password</label>
//               <div className="relative">
//                 <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
//                   <FaKey className="text-white/60 text-sm" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Enter your password"
//                   value={loginData.password}
//                   onChange={handleInputChange}
//                   onKeyPress={handleKeyPress}
//                   className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password Link */}
//             <div className="text-right mb-6">
//               <Link to="/forgot-password" className="text-sm text-white/70 hover:text-white transition-colors">
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleLogin}
//               disabled={loading || !loginData.username || !loginData.password}
//               className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 mb-6"
//             >
//               {loading && (
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//               )}
//               {loading ? "Signing In..." : "Sign In"}
//             </button>

//             {/* Sign Up Link */}
//             <p className="text-center text-sm text-white/70">
//               Don't have an account?&nbsp;
//               <Link 
//                 to="/signup" 
//                 className="text-blue-300 hover:text-white font-medium transition-colors hover:underline"
//               >
//                 Create Account
//               </Link>
//             </p>

//           </div>

//           {/* Decorative Elements */}
//           <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
//           <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useEffect, useState } from "react";
// import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUserThunk } from "../../store/slice/user/userthunk";
// import { Typewriter } from "react-simple-typewriter";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.userReducer);

//   const [loginData, setLoginData] = useState({ username: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     if (isAuthenticated) navigate("/");
//   }, [isAuthenticated, navigate]);

//   const handleInputChange = (e) => {
//     setLoginData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleLogin = async () => {
//     if (!loginData.username || !loginData.password) return;
//     setLoading(true);
//     const response = await dispatch(loginUserThunk(loginData));
//     setLoading(false);

//     if (response?.payload?.success) {
//       navigate("/");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleLogin();
//   };

//   return (
//     <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 px-4 relative">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000"></div>
//         <div className="absolute bottom-1/4 left-3/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
//       </div>

//       {/* Heading */}
//       <div className="mb-6 text-center z-10">
//         <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl mb-4 shadow-xl animate-pulse">
//           <span className="text-2xl">💬</span>
//         </div>
//         <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">
//           <Typewriter
//             words={["Welcome to WeChat"]}
//             loop={false}
//             cursor
//             cursorStyle="|"
//             typeSpeed={150}
//             deleteSpeed={50}
//             delaySpeed={5000}
//           />
//         </h1>
//         <p className="text-white/70 text-base">
//           Connect, chat, and collaborate seamlessly
//         </p>
//       </div>

//       {/* Main Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-6 z-10">
//         {/* Lottie Animation (hidden on mobile) */}
//         <div className="hidden lg:flex relative w-1/2 items-center justify-center">
//           <DotLottieReact
//             src="/animation/animation.lottie"
//             loop
//             autoplay
//             className="w-80 h-80 xl:w-[500px] xl:h-[500px] drop-shadow-2xl"
//           />
//         </div>

//         {/* Login Card */}
//         <div className="w-full max-w-md relative  ">
//           <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"></div>

//           <div className="relative z-10 p-6 text-white">
//             {/* Username */}
//             <div className="relative mb-4">
//               <label className="block text-sm font-medium mb-2 text-white/90">
//                 Username
//               </label>
//               <div className="relative">
//                 <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-sm" />
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Enter your username"
//                   value={loginData.username}
//                   onChange={handleInputChange}
//                   onKeyPress={handleKeyPress}
//                   className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="relative mb-4">
//               <label className="block text-sm font-medium mb-2 text-white/90">
//                 Password
//               </label>
//               <div className="relative">
//                 <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-sm" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Enter your password"
//                   value={loginData.password}
//                   onChange={handleInputChange}
//                   onKeyPress={handleKeyPress}
//                   className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right mb-4">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-white/70 hover:text-white transition"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleLogin}
//               // disabled={loading || !loginData.username || !loginData.password}
//               disabled = {loading} 
//               className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 px-6 rounded-xl shadow-lg text-white font-semibold flex items-center justify-center gap-3 transition disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading && (
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//               )}
//               {loading ? "Signing In..." : "Sign In"}
//             </button>

//             {/* Signup Link */}
//             <p className="text-center text-sm mt-4 text-white/70">
//               Don’t have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="text-blue-400 hover:text-white font-medium transition-colors hover:underline"
//               >
//                 Create Account
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/userthunk";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import toast from "react-hot-toast";

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
    // Show toast if inputs are empty
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
    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 px-4 py-10 relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/4 left-3/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
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
            <div className="text-right mb-6">
              <Link
                to="/forgot-password"
                className="text-sm text-transparent "
              >
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
