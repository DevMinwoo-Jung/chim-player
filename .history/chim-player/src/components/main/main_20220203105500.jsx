import axios from "axios";
import { useEffect } from "react";

function Main() {
  const config = {
    method: "get",
    url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=침착맨&type=video&key=AIzaSyC4jD0BMZz7WOtP9AXv2DweLToSXL_inh0",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="App">
      <header className="text-gray-100 bg-blue-500 text-center p-5 align-middle" />
    </div>
  );
}

export default Main;
