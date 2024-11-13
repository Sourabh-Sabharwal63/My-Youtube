import React from "react";
const ChatMessage = ({ user_name, message }) => {
  return (
    <div className="flex m-1 shadow p-1">
      <img
        className="w-10 h-10 border p-1 rounded-full border-black mx-2"
        src="https://yt4.ggpht.com/ytc/AIdro_kUSqB9_0cB2Xfe_iVPBhI9OS8Uah1pHjKRdzYH99xrZWzqtEzY1q1LlszdYWYsWdNFaA=s32-c-k-c0x00ffffff-no-rj"
        alt="user_logo"
      />
      <p className="font-bold ">{user_name}</p>
      <p className="mx-2">{message}</p>
    </div>
  );
};

export default ChatMessage;
