import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
});

export default rootReducer;
