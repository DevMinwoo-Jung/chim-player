import axios from "axios";

const config = {
  method: "get",
  url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=침착맨&type=video&key=AIzaSyC4jD0BMZz7WOtP9AXv2DweLToSXL_inh0",
  headers: {},
};

axios(config)
  .then(() => (response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch(() => (error) => {
    console.log(error);
  });
