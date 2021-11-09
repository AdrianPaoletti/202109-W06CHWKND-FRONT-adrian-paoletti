import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreator";

const urlAPILogin = process.env.REACT_APP_LOGIN;
export const loginUserThunk = (user) => {
  return async (dispatch) => {
    const response = await fetch(urlAPILogin, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      }
    })

    const responseToken = await response.json();
    if (responseToken) {
      const user = jwtDecode(responseToken.token);
      dispatch(userLoginAction(user))
      localStorage.setItem("adrian", JSON.stringify(responseToken.token))
    }
  }
}
