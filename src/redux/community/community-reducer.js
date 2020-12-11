import CommunityTypes from "./community-types";

const CommunityInitialState = {
  nearPeopleLoading: false,
  nearPeopleLoadingError: null,
  nearPeopleData: null,
  loadingProfile: false,
  profileError: null,
  profile: null,
};

const CommunityReducer = (state = CommunityInitialState, action) => {
  switch (action.type) {
    case CommunityTypes.FETCH_NEAR_PEOPLE: {
      return {
        ...state,
        nearPeopleLoading: true,
        nearPeopleLoadingError: null,
      };
    }
    case CommunityTypes.FETCH_NEAR_PEOPLE_ERROR: {
      return {
        ...state,
        nearPeopleLoading: false,
        nearPeopleLoadingError: action.payload,
      };
    }
    case CommunityTypes.FETCH_NEAR_PEOPLE_SUCCESS: {
      return {
        ...state,
        nearPeopleLoading: false,
        nearPeopleLoadingError: null,
        nearPeopleData: action.payload
      };
    }
    case CommunityTypes.GET_PROFILE_REQUEST: {
      return {
        ...state,
        loadingProfile: true,
        profileError: null,
      };
    }
    case CommunityTypes.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        loadingProfile: false,
        profileError: null,
        profile: action.payload,
      }
    }
    case CommunityTypes.GET_PROFILE_ERROR: {
      return {
        ...state,
        loadingProfile: false,
        profileError: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default CommunityReducer;
