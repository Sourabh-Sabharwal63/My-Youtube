import React from 'react'
import {New_format} from '../utility/constant'
const SmallCard = ({video}) => {
  const Chop_it=(title)=>{
    if(title.length>62){
    return title.slice(0,66)+"...";
    }
    return title;
  }
  const imgUrl=video?.snippet?.thumbnails?.standard?.url;
  const title=Chop_it(video?.snippet?.title);
  const channelTitle=video?.snippet?.channelTitle
  const views=New_format(video?.statistics.viewCount); 
  
  return (
    <div className='my-3 mx-2 grid grid-flow-col'>
      <div className='col-span-6 '>
        <img className='w-48 h-32 rounded-xl ' src={imgUrl} alt="thumbnail" />
      </div>
      
      <div className='col-span-6'>
      <p className='ml-2 text-base font-semibold   '>{title}</p>
      <p className='ml-2 text-sm'>{channelTitle}</p>
      <p className='ml-2'>{views} views</p>
      </div>
      
    </div>
  )
}

export default SmallCard