import axios from "axios";

const BASE_PATH = "http://api.tvmaze.com";

class Show {
  async getShow(showId) {
    try {
      const response = await axios.get(`${BASE_PATH}/shows/${showId}`);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async getFavorites(favorites) {
    try {
      const data = { shows: [], errors: [] };
      await Promise.all(
        favorites.map(async (showId) => {
          await this.getShow(showId)
            .then((show) => {
              data.shows.push(show.data);
            })
            .catch((err) => {
              data.errors.push(err);
            });
        })
      );
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export default new Show();
