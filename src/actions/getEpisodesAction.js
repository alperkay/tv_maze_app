import * as actionTypes from './actionTypes';
import Show from '../api/show-service';

export const getEpisodes = showId => async dispatch => {
  try {
    dispatch({
      type: actionTypes.SET_LOADING_TRUE,
    });
    const response = await Show.getEpisodes(showId);
    dispatch({
      type: actionTypes.GET_EPISODES,
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
