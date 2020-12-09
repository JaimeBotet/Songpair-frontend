import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";
import { songStateSelector } from "../../song/song-selectors";
import { communityStateSelector } from "../../community/community-selectors";

import { updateUserLocation } from "../../user/user-actions";
import { fetchNearPeople } from "../../community/community-actions";

import Map from "../../../views/map/Map";

const mapStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
  communityState: communityStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchNearPeople: (point) => dispatch(fetchNearPeople(point)),
  updateUserLocation: (point) => dispatch(updateUserLocation(point)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
