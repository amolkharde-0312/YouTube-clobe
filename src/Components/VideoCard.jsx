import React from "react";
 
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-60 shadow-lg cursor-pointer hover:scale-105 ">
      <img className="rounded-lg" alt="thumbnails" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views </li>
      </ul>
    </div>
  );
};
//higher order component 
export const AdVideoCard = ({info})=>{
return(
  <div className="border-2">
    <VideoCard info={info}/>
  </div>
)
};

export default VideoCard;
