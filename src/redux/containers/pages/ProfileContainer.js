import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";
import { signout, updateUserLocation } from '../../user/user-actions';

import Profile from "../../../views/profile/Profile";

const mapStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateUserLocation: (point) => dispatch(updateUserLocation(point)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
