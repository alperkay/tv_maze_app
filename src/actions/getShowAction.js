import * as actionTypes from "./actionTypes";
import Show from "../api/show-service";

export const getShow = (showId) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.SET_LOADING_TRUE,
    });
    const response = await Show.getShow(showId);
    dispatch({
      type: actionTypes.GET_SHOW,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({
      type: actionTypes.SET_LOADING_FALSE,
    });
  }
};
