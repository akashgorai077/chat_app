import { createSlice } from "@reduxjs/toolkit";
import { sendMessageThunk, getMessageThunk } from "./messageThunk";

const initialState = {
  buttonLoading: false,
  screenLoading: false,
  messages: null,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setNewMessage: (state, action) => {
      const oldMessages = state.messages ?? [];
      state.messages = [...oldMessages, action.payload];
    },
  },
  extraReducers: (builder) => {
    // Send message
    builder.addCase(sendMessageThunk.pending, (state) => {
      state.buttonLoading = true;
    });
    builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
      const oldMessages = state.messages ?? [];
      state.messages = [...oldMessages, action.payload?.responseData];
      state.buttonLoading = false;
    });
    builder.addCase(sendMessageThunk.rejected, (state) => {
      state.buttonLoading = false;
    });

    // Get messages
    builder.addCase(getMessageThunk.pending, (state) => {
      state.screenLoading = true;
    });
    builder.addCase(getMessageThunk.fulfilled, (state, action) => {
      state.messages = action.payload?.responseData?.messages;
      state.screenLoading = false;
    });
    builder.addCase(getMessageThunk.rejected, (state) => {
      state.screenLoading = false;
    });
  },
});

export const { setNewMessage } = messageSlice.actions;
export default messageSlice.reducer;
