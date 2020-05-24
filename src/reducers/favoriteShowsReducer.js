import { GET_FAVORITE_SHOWS } from '../actions/actionTypes';

const initialState = {
  list: [6771, 1825, 618, 169, 13417, 431, 35017, 1871, 1210, 530, 32, 5],
  shows: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITE_SHOWS:
      return Object.assign({}, state, { shows: action.payload });
    default:
      return state;
  }
}
