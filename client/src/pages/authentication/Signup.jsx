// import React, { useEffect, useState } from "react";
// import { FaUser, FaKey } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUserThunk } from "../../store/slice/user/userthunk";
// import toast from "react-hot-toast";

// const Signup = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.userReducer);

//   const [signupData, setSignupData] = useState({
//     fullName: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//   });

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (isAuthenticated) navigate("/");
//   }, []);

//   const handelInputChange = (e) => {
//     setSignupData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSignup = async () => {
//     if (signupData.password !== signupData.confirmPassword) {
//       return toast.error("Password does not match");
//     }

//     setLoading(true);
//     const response = await dispatch(registerUserThunk(signupData));
//     setLoading(false);

//     if (response?.payload?.success) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center p-6 min-h-screen">
//       <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
//         <h2 className="font-semibold text-xl text-center">Please Signup..!!</h2>

//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <FaUser />
//           <input
//             type="text"
//             name="fullName"
//             className="grow"
//             placeholder="Full Name"
//             onChange={handelInputChange}
//           />
//         </label>

//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <FaUser />
//           <input
//             type="text"
//             name="username"
//             className="grow"
//             placeholder="Username"
//             onChange={handelInputChange}
//           />
//         </label>

//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <FaKey />
//           <input
//             type="password"
//             name="password"
//             className="grow"
//             placeholder="Password"
//             onChange={handelInputChange}
//           />
//         </label>

//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <FaKey />
//           <input
//             type="password"
//             name="confirmPassword"
//             className="grow"
//             placeholder="Confirm Password"
//             onChange={handelInputChange}
//           />
//         </label>

//         <div className="flex items-center gap-10 w-full p-2">
//           <label htmlFor="male" className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               id="male"
//               value="male"
//               name="gender"
//               className="radio radio-primary"
//               onChange={handelInputChange}
//             />
//             <span>Male</span>
//           </label>
//           <label htmlFor="female" className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               id="female"
//               value="female"
//               name="gender"
//               className="radio radio-primary"
//               onChange={handelInputChange}
//             />
//             <span>Female</span>
//           </label>
//         </div>

//         <button
//           onClick={handleSignup}
//           className="btn btn-primary w-full flex items-center justify-center gap-2"
//           disabled={loading}
//         >
//           {loading && (
//             <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//           )}
//           {loading ? "Signing up..." : "Signup"}
//         </button>

//         <p className="font-thin text-sm text-center">
//           Already have an account? &nbsp;
//           <Link to="/login" className="text-blue-400 underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useEffect, useState } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/userthunk";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handelInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      return toast.error("Password does not match");
    }

    setLoading(true);
    const response = await dispatch(registerUserThunk(signupData));
    setLoading(false);

    if (response?.payload?.success) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 px-4 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/4 left-3/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 lg:gap-16 z-10">
        {/* Lottie Animation (visible only on large screens) */}
        <div className="hidden lg:flex relative w-1/2 items-end justify-center">
          <DotLottieReact
            src="/animation/animation.lottie"
            loop
            autoplay
            className="w-96 h-96 xl:w-[600px] xl:h-[600px] drop-shadow-2xl"
          />
        </div>

        {/* Signup Card */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"></div>

          <div className="relative z-10 p-8 text-white">
            <h2 className="font-bold text-2xl text-center mb-6">Create Account</h2>

            {/* Full Name */}
            <label className="input input-bordered flex items-center gap-2 w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-3 py-2">
              <FaUser className="text-white/60" />
              <input
                type="text"
                name="fullName"
                className="grow bg-transparent outline-none text-white placeholder-white/60"
                placeholder="Full Name"
                onChange={handelInputChange}
              />
            </label>

            {/* Username */}
            <label className="input input-bordered flex items-center gap-2 w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-3 py-2">
              <FaUser className="text-white/60" />
              <input
                type="text"
                name="username"
                className="grow bg-transparent outline-none text-white placeholder-white/60"
                placeholder="Username"
                onChange={handelInputChange}
              />
            </label>

            {/* Password */}
            <label className="input input-bordered flex items-center gap-2 w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-3 py-2">
              <FaKey className="text-white/60" />
              <input
                type="password"
                name="password"
                className="grow bg-transparent outline-none text-white placeholder-white/60"
                placeholder="Password"
                onChange={handelInputChange}
              />
            </label>

            {/* Confirm Password */}
            <label className="input input-bordered flex items-center gap-2 w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-3 py-2">
              <FaKey className="text-white/60" />
              <input
                type="password"
                name="confirmPassword"
                className="grow bg-transparent outline-none text-white placeholder-white/60"
                placeholder="Confirm Password"
                onChange={handelInputChange}
              />
            </label>

            {/* Gender */}
            <div className="flex items-center justify-around w-full mb-6">
              <label
                htmlFor="male"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  className="radio radio-primary bg-purple-600 border-gray-300 "
                  onChange={handelInputChange}
                />
                <span>Male</span>
              </label>
              <label
                htmlFor="female"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  className="radio radio-primary bg-purple-600 border-gray-300"
                  onChange={handelInputChange}
                />
                <span>Female</span>
              </label>
            </div>

            {/* Signup Button */}
            <button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 px-6 rounded-xl shadow-lg text-white font-semibold flex items-center justify-center gap-3 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {/* Already have account */}
            <p className="text-center text-sm mt-6 text-white/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-400 hover:text-white font-medium transition-colors hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
