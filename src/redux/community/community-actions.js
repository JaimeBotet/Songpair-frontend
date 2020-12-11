import CommunityTypes from "./community-types";
import { nearPeopleURI, getProfileURI, getChatsURI} from "../../config/config";

export const fetchNearPeopleRequest = () => ({
  type: CommunityTypes.FETCH_NEAR_PEOPLE,
});

export const fetchNearPeopleError = (errorMessage) => ({
  type: CommunityTypes.FETCH_NEAR_PEOPLE_ERROR,
  payload: errorMessage,
});

export const fetchNearPeopleSuccess = (nearPeople) => ({
  type: CommunityTypes.FETCH_NEAR_PEOPLE_SUCCESS,
  payload: nearPeople,
});

export const getProfileRequest = () => ({
  type: CommunityTypes.GET_PROFILE_REQUEST
});

export const getProfileSuccess = (profile) => ({
  type: CommunityTypes.GET_PROFILE_SUCCESS,
  payload: profile
});

export const getProfileError = (message) => ({
  type: CommunityTypes.GET_PROFILE_ERROR,
  payload: message
});

export const getChatsRequest = () => ({
  type: CommunityTypes.GET_CHATS_REQUEST
});

export const getChatsSuccess = (chats) => ({
  type: CommunityTypes.GET_CHATS_SUCCESS,
  payload: chats
});

export const getChatsError = (message) => ({
  type: CommunityTypes.GET_CHATS_ERROR,
  payload: message
});

export function fetchNearPeople(point) {
  return async function fetchNearPeopleThunk(dispatch, getState) {
    dispatch(fetchNearPeopleRequest());
    const token = getState().user.currentUser.token;

    const res = await fetch(nearPeopleURI,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        point: point,
      }),
    }).catch((error) => {
      dispatch(fetchNearPeopleError(error.message));
    });

    const nearPeopleJson = await res.json();

    if (res.ok) {
      dispatch(fetchNearPeopleSuccess(nearPeopleJson.data));
    } else {
      dispatch(fetchNearPeopleError(nearPeopleJson.error));
    }
  };
}

export function getProfile(id) {
  return async function getProfileThunk(dispatch, getState) {

    const token = getState().user.currentUser.token;

    if (token) {
      dispatch(getProfileRequest());

      const res = await fetch(`${getProfileURI}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      }).catch((error) => dispatch(getProfileError(error.message)));

      const resJson = await res
      .json()
      .catch((error) => dispatch(getProfileError(error.message)));

      if (res.ok) {
        dispatch(getProfileSuccess(resJson.data));
      } else {
        dispatch(getProfileError(resJson.error));
      }

    } else {
      dispatch(getProfileError("Missing auth token"));
    }
  };
}

export function getChats(){
  return async function getUserChatsThunk(dispatch, getState) {

    const token = getState().user.currentUser.token;

    if (token) {
      dispatch(getChatsRequest());

      const res = await fetch(getChatsURI + '/' + token, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      }).catch((error) => dispatch(getChatsError(error.message)));

      const resJson = await res
      .json()
      .catch((error) => dispatch(getChatsError(error.message)));

      if (res.ok) {
        dispatch(getChatsSuccess(resJson.data.data));
      } else {
        dispatch(getChatsError(resJson.error));
      }

    } else {
      dispatch(getChatsError("Missing auth token"));
    }
  };
}


