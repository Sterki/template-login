import { GET_USER_AUTH } from "./../types";

const inisialState = {
  user: null,
};

export default (state = inisialState, action) => {
  switch (action.type) {
    case GET_USER_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
