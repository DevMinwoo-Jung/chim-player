import Search from "components/search/Search";
import VideoList from "components/videoList/VideoList";
import { useCallback, useEffect, useState } from "react";

function Main({ chimPlayer }) {
  const [videos, setVideos] = useState(null);
  const [showVideo, setShowVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [likeVideos, setLikeVideos] = useState([]);

  function onPlayVideo(video) {
    const newVideo = video.id;
    if (showVideo !== null) {
      setShowVideo(newVideo);
    }
    setShowVideo(newVideo);
  }
  console.log(likeVideos);

  const onLikeVideoList = (video) => {
    let likeVideos = localStorage.getItem("videoId");
    if (likeVideos === null) {
      likeVideos = [];
    } else {
      likeVideos = JSON.parse(likeVideos);
    }
    likeVideos.push(video.snippet.thumbnails.high.url);
    likeVideos = [...likeVideos];
    localStorage.setItem("videoId", JSON.stringify(likeVideos));
    setLikeVideos(likeVideos);
  };

  useEffect(() => {
    let showVideos = localStorage.getItem("videoId");
    if (likeVideos === null) {
      showVideos = [];
      setLikeVideos(showVideos);
    } else {
      showVideos = JSON.parse(showVideos);
    }
    setLikeVideos(showVideos);
  }, []);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      console.log(query);
      setSelectedVideo(null);
      chimPlayer.search(query).then((videos) => {
        setVideos(videos);
      });
    },
    [chimPlayer]
  );

  const removeLike = (video) => {
    console.log(video);
    localStorage.removeItem("videoId", video);
    let likeVideos = localStorage.getItem("videoId");
    if (likeVideos === null) {
      likeVideos = [];
    } else {
      likeVideos = JSON.parse(likeVideos);
    }
    likeVideos = [...likeVideos];
    localStorage.setItem("videoId", JSON.stringify(likeVideos));
    setLikeVideos(likeVideos);
  };

  useEffect(() => {
    chimPlayer.mostPopular().then((videos) => setVideos(videos));
  }, []); //

  //  console.log(Object.keys(videos).map((key) => videos.items[key]));

  return (
    <div className="App">
      <header className="text-gray-100 bg-blue-500 text-center p-5 align-middle" />
      <Search search={search} />
      <div className="flex">
        {videos &&
          videos.map((video) => (
            <VideoList
              key={video.id}
              video={video}
              // eslint-disable-next-line react/jsx-no-bind
              onPlayVideo={onPlayVideo}
              onLikeVideoList={onLikeVideoList}
            />
          ))}
        {showVideo && (
          <iframe
            title="asd"
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${showVideo}`}
          />
        )}
      </div>
      {likeVideos &&
        likeVideos.map((video) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div key={video.id}>
            <img src={video} alt="" />
            <button type="button" onClick={removeLike}>
              지우기
            </button>
          </div>
        ))}
    </div>
  );
}

export default Main;
