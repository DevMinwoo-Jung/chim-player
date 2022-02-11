import { useEffect, useState } from "react";

function Main() {
  const [videos, setVideos] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=침착맨&type=video&key=AIzaSyC4jD0BMZz7WOtP9AXv2DweLToSXL_inh0",
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

  function onPlayVideo(e) {
    console.log(e.target.value);
    setShowVideo(true);
  }

  return (
    <div className="App">
      <header className="text-gray-100 bg-blue-500 text-center p-5 align-middle" />
      <div className="flex">
        {videos &&
          Object.keys(videos).map((key) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <img
              key={Math.random()}
              src={videos[key].snippet.thumbnails.high.url}
              alt=""
              onClick={onPlayVideo}
            />
          ))}
        {showVideo && (
          <iframe
            title="asd"
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/leOZrOGHj6U?autoplay=1&origin=http://example.com"
          />
        )}
      </div>
    </div>
  );
}

export default Main;
