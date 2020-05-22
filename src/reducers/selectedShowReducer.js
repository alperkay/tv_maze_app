import { GET_SHOW } from "../actions/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SHOW:
      return action.payload;
    default:
      return state;
  }
}
