/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

function VideoList({ video }) {
  const [showVideo, setShowVideo] = useState(false);
  function onPlayVideo(e) {
    console.log(e.target);
    setShowVideo(true);
  }
  console.log(video);
  return (
    <div>
      <img
        src={video.snippet.thumbnails.high.url}
        alt=""
        onClick={onPlayVideo}
      />
      ))
    </div>
  );
}

export default VideoList;
