import UserTypes from "./user-types";
import { signInFormURI, signUpURI } from "../../config/config";

export const resetStoreAndLogOut = () => ({
  type: UserTypes.RESET_STORE_AND_LOG_OUT,
});

export const signInFormRequest = () => ({
  type: UserTypes.FORM_REQUEST,
});

export const signInFormError = (message) => ({
  type: UserTypes.FORM_ERROR,
  payload: message,
});

export const signInFormSuccess = (form) => ({
  type: UserTypes.FORM_SUCCESS,
  payload: form
});

export const loginRequest = () => ({
  type: UserTypes.LOGIN_REQUEST,
});

export const loginError = (message) => ({
  type: UserTypes.LOGIN_ERROR,
  payload: message,
});

export const loginSuccess = ({ name, lastname, email, token }) => ({
  type: UserTypes.LOGIN_SUCCESS,
  payload: {
    name: name,
    lastname: lastname,
    email: email,
    token: token,
  },
});

export const signUpRequest = () => ({
  type: UserTypes.SIGNUP_REQUEST,
});

export const signUpError = (message) => ({
  type: UserTypes.SIGNUP_ERROR,
  payload: message,
});

export const signupSuccess = ({ name, lastname, email, token }) => ({
  type: UserTypes.SIGNUP_SUCCESS,
  payload: {
    name: name,
    token: token,
  },
});

export const signoutRequest = () => ({
  type: UserTypes.SIGNOUT_REQUEST,
});

export const signoutError = (message) => ({
  type: UserTypes.SIGNOUT_REQUEST,
  payload: message,
});

export const signoutSuccess = () => ({
  type: UserTypes.SIGNOUT_SUCCESS,
});

export function signUp({ name, email, password, avatar, token, refreshToken, location, spotifyID }) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());

    const res = await fetch(signUpURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        avatar,
        token,
        refreshToken,
        location,
        spotifyID
      }),
    }).catch((error) => dispatch(signUpError(error.message)));

    const resJson = await res
      .json()
      .catch((error) => dispatch(signUpError(error.message)));

    if (res.ok) {
      dispatch(
        signupSuccess({
          name: resJson.data.user.name,
          token: resJson.data.token,
        }),
      );
    } else {
      dispatch(signUpError(resJson.error));
    }
  };
}

export function login({ email, password }) {
  return async function loginThunk(dispatch) {
    dispatch(loginRequest());

    const res = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).catch((error) => dispatch(loginError(error.message)));

    const resJson = await res
      .json()
      .catch((error) => dispatch(signUpError(error.message)));

    if (res.ok) {
      dispatch(
        loginSuccess({
          name: resJson.data.user.name,
          lastname: resJson.data.user.lastname,
          email: resJson.data.user.email,
          token: resJson.data.token,
        }),
      );
    } else {
      dispatch(loginError(resJson.error));
    }
  };
}

export function signout() {
  return async function logoutThunk(dispatch, getState) {
    const token = getState().user.currentUser.token;

    if (token) {
      dispatch(signoutRequest());

      const res = await fetch("http://localhost:4000/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).catch((error) => dispatch(signoutError(error.message)));

      if (res.ok) {
        dispatch(signoutSuccess());
      }
    } else {
      dispatch(signoutError("Missing auth token"));
    }
  };
}

export function signInForm(code) {
  return async function signInFormThunk(dispatch, getState) {

    dispatch(signInFormRequest());

    const res = await fetch(`${signInFormURI}?code=${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).catch((error) => dispatch(signInFormError(error.message)));

    const resJson = await res
      .json()
      .catch((error) => dispatch(signInFormError(error.message)));

    if (res.ok) {
      dispatch(
        signInFormSuccess(resJson.data.data)
      );
    } else {
      dispatch(signInFormError(resJson.error));
    }
  };
}
