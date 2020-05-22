import { combineReducers } from "redux";
import selectedShowReducer from "./selectedShowReducer";
import favoriteShowsReducer from "./favoriteShowsReducer";

export default combineReducers({
  selectedShow: selectedShowReducer,
  favoriteShows: favoriteShowsReducer,
});
