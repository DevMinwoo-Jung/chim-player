import LikeVideos from "components/likeVideos/likeVideos";
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
    console.log(video);
    let likeVideos = localStorage.getItem("videoId");
    if (likeVideos === null) {
      likeVideos = [];
    } else {
      likeVideos = JSON.parse(likeVideos);
    }
    if (likeVideos.indexOf(video.snippet.thumbnails.high.url) !== -1) {
      alert("이미 있슈!");
      return;
    }
    likeVideos.push(video.snippet.thumbnails.high.url);
    likeVideos = [...likeVideos];
    localStorage.setItem("videoId", JSON.stringify(likeVideos));
    setLikeVideos(likeVideos);
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

  const removeLike = (video) => {
    let likeVideos = localStorage.getItem("videoId");
    likeVideos = JSON.parse(likeVideos);
    console.log(likeVideos);
    console.log(video);
    console.log(likeVideos.indexOf(video));
    if (likeVideos.indexOf(video) !== -1) {
      likeVideos.splice(likeVideos.indexOf(video), 1);
    }

    setLikeVideos(likeVideos);
    likeVideos = [...likeVideos];
    localStorage.setItem("videoId", JSON.stringify(likeVideos));
  };

  useEffect(() => {
    chimPlayer.mostPopular().then((videos) => setVideos(videos));
  }, []);

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
          <LikeVideos removeLike={removeLike} key={video.id} video={video} />
        ))}
    </div>
  );
}

export default Main;
