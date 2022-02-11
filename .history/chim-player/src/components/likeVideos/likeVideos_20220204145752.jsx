import React from "react";

const likeVideos = ({ video, removeLike }) => {
  const setRemoveLike = () => {
    removeLike(video);
  };

  return (
    <div key={video.id}>
      <img src={video} alt="" />
      <button type="button" onClick={setRemoveLike}>
        지우기
      </button>
    </div>
  );
};

export default likeVideos;
