import { GET_USER, SIGN_OUT } from "../actions/user.action";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
      };
    }
    case SIGN_OUT: {
      return {
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
