import React from "react";
import TitleBar from "./TitleBar";
import VideoCard from "./VideoCard";
import useGetVideos from "./Hooks/useGetVideos";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  useGetVideos();
  const videoData = useSelector((store) => store?.AppSlice?.Videos);
 
  if (!videoData) return null;

  return (
    <div className="col-span-11 text-center px-2 py-4 ">
      <TitleBar />
      <div className="flex flex-wrap justify-between">
        {videoData.map((video) => (
          <Link key={video.id}  className="decoration-none contents" to={"/watch?v=" + video.id}>
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
  // "YouTube Data API v3 has not been used in project 751221949924 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=751221949924 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."
};

export default VideoContainer;
