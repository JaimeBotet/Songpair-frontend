import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";

import { getProfile } from '../../community/community-actions';
import { getChats } from '../../community/community-actions';

import ChatRoom from "../../../views/chat/ChatRoom";

const chatRoomStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
});

const chatRoomDispatchToProps = (dispatch) => ({
  getChats: () => dispatch(getChats()),
  getProfile: (id) => dispatch(getProfile(id)),
});

export default connect(chatRoomStateToProps, chatRoomDispatchToProps)(ChatRoom);
