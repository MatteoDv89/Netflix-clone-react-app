export const GET_USER = "GET_USER";
export const SIGN_OUT = "GET_USER";

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

export const signOutUser = (data) => {
  return {
    type: SIGN_OUT,
    payload: data,
  };
};
