function LikeVideos({ video, removeLike }) {
  function setRemoveLike() {
    removeLike(video);
  }

  return (
    <div key={video.id}>
      <img src={video.snippet.thumbnails.default.url} alt="" />
      <button type="button" onClick={setRemoveLike}>
        지우기
      </button>
    </div>
  );
}

export default LikeVideos;
