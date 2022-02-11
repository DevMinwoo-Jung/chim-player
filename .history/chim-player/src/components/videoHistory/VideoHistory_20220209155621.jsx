function VideoHistory({ video }) {
  console.log(video);
  return (
    <div>
      <img src={video.snippet.thumbnails.default.url} alt="" />
    </div>
  );
}

export default VideoHistory;
