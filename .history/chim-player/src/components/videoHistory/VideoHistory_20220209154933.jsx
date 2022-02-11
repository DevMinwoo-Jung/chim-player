function VideoHistory({ video }) {
  return (
    <div>
      <img src={video.snippet.thumbnails.high.url} alt="" />
    </div>
  );
}

export default VideoHistory;
