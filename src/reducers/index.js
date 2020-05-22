import { combineReducers } from "redux";
import selectedShowReducer from "./selectedShowReducer";
import favoriteShowsReducer from "./favoriteShowsReducer";
import loadingStatusReducer from "./loadingStatusReducer";

export default combineReducers({
  selectedShow: selectedShowReducer,
  favoriteShows: favoriteShowsReducer,
  loadingStatus: loadingStatusReducer,
});
