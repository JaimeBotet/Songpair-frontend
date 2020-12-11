import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";
import { updateUserLocation } from '../../user/user-actions';
import { getChats } from '../../community/community-actions';

import Chat from "../../../views/chat/Chat";

const chatStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
});

const chatDispatchToProps = (dispatch) => ({
  getChats: () => dispatch(getChats()),
  updateUserLocation: (point) => dispatch(updateUserLocation(point)),
});

export default connect(chatStateToProps, chatDispatchToProps)(Chat);
