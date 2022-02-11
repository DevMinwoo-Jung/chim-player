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
    </div>
  );
}

export default VideoList;
