import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ messageDetails }) => {
  const messageRef = useRef(null);
  const { userProfile, selectedUser } = useSelector(
    (state) => state.userReducer
  );

  const isSender = userProfile?._id === messageDetails?.senderId;

  const formattedTime = messageDetails?.createdAt
    ? new Date(messageDetails.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageDetails]);

  return (
    <div
      ref={messageRef}
      className={`chat ${isSender ? "chat-end" : "chat-start"} px-2`}
    >
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full ring-2 ring-[#7480FF]">
          <img
            alt="avatar"
            src={isSender ? userProfile?.avatar : selectedUser?.avatar}
            className="object-cover"
          />
        </div>
      </div>

      <div className="chat-bubble bg-[#7480FF] text-white shadow-md px-4 py-2 rounded-xl max-w-xs sm:max-w-sm break-words">
        {messageDetails?.message}
      </div>

      <div className="chat-footer mt-1">
        <span className="text-[10px] text-gray-400">{formattedTime}</span>
      </div>
    </div>
  );
};

export default Message;
