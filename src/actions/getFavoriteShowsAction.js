import * as actionTypes from "./actionTypes";
import Show from "../api/show-service";

export const getFavoriteShows = (favorites) => async (dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING_TRUE,
  });
  try {
    await Show.getFavorites(favorites).then((res) => {
      dispatch({
        type: actionTypes.GET_FAVORITE_SHOWS,
        payload: res.shows,
      });
      if (res.errors.length > 0) {
        dispatch({
          type: actionTypes.ERROR_LOG,
          payload: res.errors,
        });
      }
    });
  } catch (error) {
    throw error;
  } finally {
    dispatch({
      type: actionTypes.SET_LOADING_FALSE,
    });
  }
};
