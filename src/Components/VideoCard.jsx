import React from 'react'
import { New_format } from './utility/constant';
const VideoCard = ({video}) => {
  const thumbnails=video?.snippet?.thumbnails?.standard?.url;
  const title=video?.snippet?.title;
  const channelTitle=video?.snippet?.channelTitle;
  const views= New_format(video.statistics.viewCount)
  
 
  return (
    <div className=' p-2 shadow-md text-left  m-1 w-[32%]'>
      <img className='rounded-2xl h-72 w-full' src={thumbnails} alt="thumbnails" />
      <ul>
        <li className='font-semibold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{views}</li>
      </ul>
   
    </div>
  )
}

export default VideoCard