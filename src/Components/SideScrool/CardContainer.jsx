import React from "react";
import SmallCard from "./SmallCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CardContainer = () => {
  const Video = useSelector((store) => store?.AppSlice?.Videos);
  return (
    <div>
      {Video.map((video) => (
        <Link key={video.id} className="decoration-none contents" to={"/watch?v=" + video.id}>
           <SmallCard video={video}/>
        </Link>
       
      ))}
    </div>
  );
};

export default CardContainer;
