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
}

export default new Show();
