import React, { useEffect } from "react";
import { closeMenu } from "./utility/Redux/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { New_format, Comments_Data } from "./utility/constant";
import Comments from "./Comments";
import LiveChat from "./LiveChat/LiveChat";
import CardContainer from "./SideScrool/CardContainer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const video_id = searchParams.get("v");
  const Curr_videos = useSelector((store) => store?.AppSlice?.Videos).filter(
    (vid) => vid.id === video_id
  );
  const commentsCount = New_format(Curr_videos[0]?.statistics?.commentCount);

  const likes = New_format(Curr_videos[0].statistics.likeCount);

  const url = `https://www.youtube.com/embed/${video_id}`;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
   
  }, [dispatch]);
  return (
    <div className="flex w-full">
      <div className="p-4 w-8/12 ">
        <iframe
          className="rounded-xl"
          width="958"
          height="500"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="text-lg my-3 font-bold">{Curr_videos[0].snippet.title}</p>
        <div className="flex justify-between">
          <div className="flex  my-3 ">
            <p className="text-base mx-4 font-bold">
              {Curr_videos[0].snippet.channelTitle}
            </p>
            <button className="bg-gray-800 text-white px-3 py-2 rounded-full">
              Subscribe
            </button>
          </div>
          <div>
            <button className="bg-gray-200 px-3 py-2 rounded-l-full border-gray-400 border-r-2 text-base hover:bg-gray-300">
              👍{likes}
            </button>
            <button className="bg-gray-200 px-3 py-2 rounded-r-full text-base hover:bg-gray-300">
              👎
            </button>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl">{commentsCount}Comment </div>
          <hr />
          <div className="py-4">
            <Comments data={Comments_Data} />
            <Comments data={Comments_Data} />
          </div>
        </div>
      </div>
      <div className="w-4/12">
        <div className="w-full border border-black rounded p-2 h-[600px] overflow-y-scroll  bg-gray-200">
          <LiveChat/>
        </div>
        <div><CardContainer/></div>
      </div>
    </div>
  );
};

export default WatchPage;
