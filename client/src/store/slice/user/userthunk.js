import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/login", {
        username,
        password,
      });
      toast.success("Login successful");
      return response.data;
    } catch (error) {
      console.log(error);
      const errorOutput = error?.response?.data?.errmessage;
      toast.error(errorOutput);
      return rejectedWithValue(errorOutput);
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "user/signup",
  async ({ fullName, username, password, gender }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/register", {
        fullName,
        username,
        password,
        gender,
      });
      // toast.success("Account created successfully");
      return response.data;
    } catch (error) {
      console.log(error);
      const errorOutput = error?.response?.data?.errmessage;
      toast.error(errorOutput);
      return rejectedWithValue(errorOutput);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  "user/logout",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/logout");

      toast.success("Logout successfully");
      return response.data;
    } catch (error) {
      console.log(error);
      const errorOutput = error?.response?.data?.errmessage;
      toast.error(errorOutput);
      return rejectedWithValue(errorOutput);
    }
  }
);

export const getUserProfileThunk = createAsyncThunk(
  "user/getProfile",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get("/users/get-profile");
      return response.data;
    } catch (error) {
      console.log(error);
      const errorOutput = error?.response?.data?.errmessage;
      //   toast.error(errorOutput);
      return rejectedWithValue(errorOutput);
    }
  }
);

export const getOtherUsersThunk = createAsyncThunk(
  "user/getOtherUsers",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get("/users/get-other-users");
      return response.data;
    } catch (error) {
      console.log(error);
      const errorOutput = error?.response?.data?.errmessage;
      //   toast.error(errorOutput);
      return rejectedWithValue(errorOutput);
    }
  }
);
