import React, { useEffect, useState } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/userthunk";
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
  }, []);

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
    <div className="flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h2 className="font-semibold text-xl text-center">Please Signup..!!</h2>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser />
          <input
            type="text"
            name="fullName"
            className="grow"
            placeholder="Full Name"
            onChange={handelInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
            onChange={handelInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaKey />
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="Password"
            onChange={handelInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaKey />
          <input
            type="password"
            name="confirmPassword"
            className="grow"
            placeholder="Confirm Password"
            onChange={handelInputChange}
          />
        </label>

        <div className="flex items-center gap-10 w-full p-2">
          <label htmlFor="male" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              className="radio radio-primary"
              onChange={handelInputChange}
            />
            <span>Male</span>
          </label>
          <label htmlFor="female" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              className="radio radio-primary"
              onChange={handelInputChange}
            />
            <span>Female</span>
          </label>
        </div>

        <button
          onClick={handleSignup}
          className="btn btn-primary w-full flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Signing up..." : "Signup"}
        </button>

        <p className="font-thin text-sm text-center">
          Already have an account? &nbsp;
          <Link to="/login" className="text-blue-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
