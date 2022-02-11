import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import App from "./App";
import ChimPlayer from "./service/getVideos.js";

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.YOUTUBE_API_KEY },
});

const chimPlayer = new ChimPlayer(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App chimPlayer={chimPlayer} />
  </React.StrictMode>,
  document.getElementById("root")
);
