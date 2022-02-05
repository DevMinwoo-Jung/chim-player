import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import YOUTUBE_API_KEY from "apiKeys";
import App from "./App";
import ChimPlayer from "./service/getVideos.js";

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: YOUTUBE_API_KEY },
});

const chimPlayer = new ChimPlayer(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App chimPlayer={chimPlayer} />
  </React.StrictMode>,
  document.getElementById("root")
);
