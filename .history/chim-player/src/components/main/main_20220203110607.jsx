import { useEffect, useState } from "react";

function Main() {
  const [videos, setVideos] = useState();

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=침착맨&type=video&key=AIzaSyC4jD0BMZz7WOtP9AXv2DweLToSXL_inh0",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setVideos(result))
      .catch((error) => console.log("error", error));
  }, []);

  console.log(videos.items);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return (
    <div className="App">
      <header className="text-gray-100 bg-blue-500 text-center p-5 align-middle" />
      {Object.keys(videos).map((key) => videos[key])}
    </div>
  );
}

export default Main;
