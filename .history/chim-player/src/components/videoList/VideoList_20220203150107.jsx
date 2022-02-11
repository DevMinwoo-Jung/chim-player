/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

function VideoList({ video }) {
  const [showVideo, setShowVideo] = useState([]);

  function onPlayVideo() {
    const newVideo = [...showVideo];
    if (newVideo !== null) {
      newVideo.splice(1, 1);
    }
    setShowVideo(video.id.videoId);
  }
  return (
    <div>
      <img
        src={video.snippet.thumbnails.high.url}
        alt=""
        onClick={onPlayVideo}
      />
      <iframe
        title="asd"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${showVideo}?autoplay=1&origin=http://example.com}`}
      />
    </div>
  );
}

export default VideoList;
