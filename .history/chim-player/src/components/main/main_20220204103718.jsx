import Search from "components/search/Search";
import VideoList from "components/videoList/VideoList";
import { useCallback, useEffect, useState } from "react";

function Main({ chimPlayer }) {
  const [videos, setVideos] = useState(null);
  const [showVideo, setShowVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  console.log(videos);

  function onPlayVideo(video) {
    console.log(video);
    if (showVideo !== null) {
      const newVideo = video.id;
      setShowVideo(newVideo);
    }
    setShowVideo(video.id);
    console.log(showVideo);
  }
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      chimPlayer.search(query).then((videos) => {
        setVideos(videos);
      });
    },
    [chimPlayer]
  );

  useEffect(() => {
    chimPlayer.mostPopular().then((videos) => setVideos(videos));
  }, []); //

  //  console.log(Object.keys(videos).map((key) => videos.items[key]));
  console.log(videos);

  return (
    <div className="App">
      <header className="text-gray-100 bg-blue-500 text-center p-5 align-middle" />
      <Search search={search} />
      <div className="flex">
        {videos &&
          Object.keys(videos).map((key) => (
            <VideoList
              key={videos.id}
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
