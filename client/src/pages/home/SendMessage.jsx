import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../store/slice/message/messageThunk";

const SendMessage = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState("");
  const handelSendMessage = () => {
    dispatch(sendMessageThunk({ receiverId: selectedUser?._id, message,  }));
    setMessage('');
  };
  return (
    <div>
      <div className="w-full p-3 flex gap-2">
        <input
          type="text"
          placeholder="Message..."
          className="input input-bordered input-primary w-full "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handelSendMessage}
          className="btn btn-outline btn-primary"
        >
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
