import { GET_FAVORITE_SHOWS } from "../actions/actionTypes";

const initialState = { list: [1, 2, 3, 4, 5, 6, 17, 8, 9, 10, 11], shows: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITE_SHOWS:
      return Object.assign({}, state, { shows: action.payload });
    default:
      return state;
  }
}
