import React, { useState } from "react";
import userLogo from "./user.png";

const Comments = ({ data }) => {
  const [comm_flag, setComm_flag] = useState(false);
  if (!data[0]) return;

  const { name, comment } = data[0];
  const handleDrop = () => {
    setComm_flag(!comm_flag);
  };

  return (
    <div className="flex bg-gray-200">
      <div>
        <img
          className="w-10 h-10 border p-1 rounded-full border-black mx-2"
          src={userLogo}
          alt="userLogo"
        />
      </div>
      <div>
        <p className="font-medium text-base">@{name}</p>
        <p className="font-medium text-base mb-3">{comment}</p>
        <div className="mx-1">
          {!comm_flag && <p onClick={handleDrop}>🔽 Show Replies</p>}
          {comm_flag && (
            <div>
              {" "}
              <Comments data={data[0].replies} />
              <div onClick={handleDrop}> 🔼 Hide Replies</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
