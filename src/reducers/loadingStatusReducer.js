import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  ERROR_LOG,
} from "../actions/actionTypes";

const initialState = { loading: false, errors: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_FALSE:
      return { ...state, loading: false };
    case ERROR_LOG:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}
