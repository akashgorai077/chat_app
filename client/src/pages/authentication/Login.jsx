// import React, { useEffect, useState } from "react";
// import { FaUser, FaKey } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux';
// import { loginUserThunk } from "../../store/slice/user/userthunk";
// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {isAuthenticated  } = useSelector(
//     (state)=>state.userReducer);
//   const [loginData, setLoginData] = useState({
//     username: "",
//     password: "",
//   });


// useEffect(()=>{
//   if(isAuthenticated) navigate('/');
// },[isAuthenticated]);

//   const handelInputChange = (e) => {
//     setLoginData((prev) => ({
//      ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   }
  
// const handleLogin = async () => {
//   const response = await dispatch(loginUserThunk(loginData));
//   if(response?.payload?.success){
//     navigate("/")
//    }
// }
//   return (
//     <div className="flex justify-center items-center p-6 min-h-screen ">
//       <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg" >
//         <h2 className="font-semibold">Please Login..!!</h2>
     
//       <label className="input input-bordered flex items-center gap-2 w-full">
//         <FaUser />
//         <input type="text" name="username" className="grow" placeholder="Username" onChange={handelInputChange} />
//       </label>
     
//       <label className="input input-bordered flex items-center gap-2 w-full">
//         <FaKey />
//         <input type="password" name="password" className="grow" placeholder="Password" onChange={handelInputChange}  />
//       </label>
     
//       <button onClick={handleLogin} className="btn btn-active btn-primary">Login</button>
//       <p className="font-thin text-sm">
//         Don't have an account? &nbsp;
//          <Link to='/signup'  className="text-blue-400 underline">Sign up</Link>
//       </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/userthunk";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    const response = await dispatch(loginUserThunk(loginData));
    setLoading(false);

    if (response?.payload?.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h2 className="font-semibold text-xl text-center">Please Login..!!</h2>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaKey />
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </label>

        <button
          onClick={handleLogin}
          className="btn btn-primary w-full flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="font-thin text-sm text-center">
          Don’t have an account? &nbsp;
          <Link to="/signup" className="text-blue-400 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
