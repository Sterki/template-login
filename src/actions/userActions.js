import { GET_USER_AUTH } from "./../types";

export function getUserAction(user) {
  return (dispatch) => {
    dispatch(getUser(user));
  };
}
const getUser = (user) => ({
  type: GET_USER_AUTH,
  payload: user,
});
