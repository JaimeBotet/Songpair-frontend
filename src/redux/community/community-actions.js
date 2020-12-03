import CommunityTypes from "./community-types";
import { nearPeopleURI } from "../../config/config";

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
      console.log(error);
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


