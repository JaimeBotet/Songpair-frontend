import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";

import { updateLike } from "../../user/user-actions";

import Marker from "../../../views/components/Marker/Marker";

const mapStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateLike: (song, receiver) => dispatch(updateLike(song, receiver)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Marker);
