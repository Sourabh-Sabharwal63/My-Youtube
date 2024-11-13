import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessages } from "../utility/Redux/chatSlice";
import { useSelector } from "react-redux";
import { generate_name } from "../utility/constant";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveData = useSelector((store) => store?.ChatSlice?.messages);
 
  useEffect(() => {
    const t = setInterval(() => {
      const UserName = generate_name();
      dispatch(
        addMessages({
          user_name: UserName,
          message: "Batman is my best friend ☺️",
        })
      );
    }, 2000);
    return () => clearInterval(t);
  }, [liveData, dispatch]);
  if (!liveData) return <div>Loading.....</div>;

  return (
    <div>
      {liveData.map((data) => (
        <ChatMessage user_name={data.user_name} message={data.message} />
      ))}
    </div>
  );
};

export default LiveChat;
