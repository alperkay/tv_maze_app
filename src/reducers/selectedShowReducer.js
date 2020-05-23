import { SELECT_SHOW, GET_EPISODES } from '../actions/actionTypes';

const initialState = { id: null, episodes: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_SHOW:
      return Object.assign({}, state, { id: action.payload });
    case GET_EPISODES:
      return Object.assign({}, state, { episodes: action.payload });
    default:
      return state;
  }
}
