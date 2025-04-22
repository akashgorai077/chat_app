import React, { useEffect } from "react";
import User from "./User";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { getMessageThunk } from "../../store/slice/message/messageThunk";
import SendMessage from "./SendMessage";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { messages, screenLoading } = useSelector((state) => state.messageReducer);

  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
    }
  }, [selectedUser]);

  return (
    <>
      {!selectedUser ? (
        <div className="w-full flex items-center justify-center flex-col gap-5 h-full">
          <h2 className="text-2xl font-semibold">Welcome to GUP SHUP</h2>
          <p className="text-xl">Please select a person to continue your chat!!</p>
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col">
          <div className="p-3 border-b border-b-white/15">
            <User userDetails={selectedUser} />
          </div>

          <div className="h-full overflow-y-auto p-3 flex-1">
            {screenLoading ? (
              <div className="w-full h-full flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-primary"></span>
                
              </div>
            ) : messages?.length > 0 ? (
              messages.map((messageDetails) => (
                <Message key={messageDetails?._id} messageDetails={messageDetails} />
              ))
            ) : (
              <p className="text-center text-gray-500">No messages yet. Say hello 👋</p>
            )}
          </div>

          <SendMessage />
        </div>
      )}
    </>
  );
};

export default MessageContainer;



