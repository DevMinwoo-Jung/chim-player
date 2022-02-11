/* eslint-disable jsx-a11y/click-events-have-key-events */

function VideoList({ video, onPlayVideo }) {
  function setPlayVideo() {
    onPlayVideo(video);
  }

  function setLikeList() {
    if (localStorage.getItem("videoId") === null) {
      localStorage.setItem("videoId", null);
    }
    const likeVideos = [localStorage.getItem("videoId")];
    localStorage.setItem("videoId", likeVideos.push(video.id));
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
