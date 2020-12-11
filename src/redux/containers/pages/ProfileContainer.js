import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";
import { communityStateSelector } from "../../community/community-selectors";

import { updateUserLocation } from '../../user/user-actions';
import { getProfile } from '../../community/community-actions';

import Profile from "../../../views/profile/Profile";

const mapStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
  communityState: communityStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateUserLocation: (point) => dispatch(updateUserLocation(point)),
  getProfile: (id) => dispatch(getProfile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

