export const GET_MOVIES = "GET_MOVIES";

export const getMovies = (data) => {
  return {
    type: GET_MOVIES,
    payload: data,
  };
};
