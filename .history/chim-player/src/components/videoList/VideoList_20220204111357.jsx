/* eslint-disable jsx-a11y/click-events-have-key-events */

function VideoList({ video, onPlayVideo }) {
  function setPlayVideo() {
    onPlayVideo(video);
  }
  return (
    <div>
      <img
        src={video.snippet.thumbnails.high.url}
        alt=""
        onClick={setPlayVideo}
      />
      <button type="button" onClick={setLikeList}>
        즐겨찾기
      </button>
    </div>
  );
}

export default VideoList;
