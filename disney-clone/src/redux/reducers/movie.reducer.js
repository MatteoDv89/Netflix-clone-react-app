import { GET_MOVIES } from "../actions/movie.action";

const initialState = {
  recommend: null,
  original: null,
  news: null,
  marvel: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        recommend: action.payload.recommend,
        original: action.payload.original,
        news: action.payload.news,
        marvel: action.payload.marvel,
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
