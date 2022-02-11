class ChimPlayer {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 10,
        q: "침착맨",
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({ ...item, id: item.id.videId }));
  }
}

export default ChimPlayer;
