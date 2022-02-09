/* eslint-disable jsx-a11y/click-events-have-key-events */

function VideoList({ video, onPlayVideo, onLikeVideoList, onSaveHistory }) {
  const setPlayVideo = () => {
    onPlayVideo(video);
  };

  const setSaveHistory = () => {
    onSaveHistory(video);
  };

  const setVideoAndHistory = () => {
    setPlayVideo();
    setSaveHistory();
  };

  const setLikeList = () => {
    onLikeVideoList(video);
  };

  return (
    <div>
      <img
        src={video.snippet.thumbnails.high.url}
        alt=""
        onClick={setVideoAndHistory}
      />
      <button type="button" onClick={setLikeList}>
        즐겨찾기
      </button>
    </div>
  );
}

export default VideoList;
