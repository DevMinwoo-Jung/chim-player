import VideoList from "components/videoList/VideoList";
import { useEffect, useState } from "react";

function Main({ chimPlayer }) {
  const [videos, setVideos] = useState(null);
  const [showVideo, setShowVideo] = useState(null);

  function onPlayVideo(video) {
    if (showVideo !== null) {
      let newVideo = [...showVideo];
      newVideo = video.id.videoId;
      setShowVideo(newVideo);
    }
    setShowVideo(video.id.videoId);
    console.log(showVideo);
  }

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=침착맨&type=video&key=AIzaSyBZGSgaQmf-pKjPv5KecAGgIMA8-jD6FOw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  //  console.log(Object.keys(videos).map((key) => videos.items[key]));
  console.log(videos);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return (
    <div className="App">
      <header className="text-gray-100 bg-blue-500 text-center p-5 align-middle" />
      <div className="flex">
        {videos &&
          Object.keys(videos).map((key) => (
            <VideoList
              key={Math.random}
              video={videos[key]}
              // eslint-disable-next-line react/jsx-no-bind
              onPlayVideo={onPlayVideo}
            />
          ))}
        {showVideo && (
          <iframe
            title="asd"
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${showVideo}?autoplay=1&origin=http://example.com}`}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
