function LikeVideos({ video, removeLike }) {
  function setRemoveLike() {
    console.log(video);
    removeLike(video);
  }

  return (
    <div key={video.id}>
      <img src={video} alt="" />
      <button type="button" onClick={setRemoveLike}>
        지우기
      </button>
    </div>
  );
}

export default LikeVideos;
