import { connect } from "react-redux";

import { currentUserStateSelector } from "../../user/user-selectors";
import { songStateSelector } from "../../song/song-selectors";
import { communityStateSelector } from "../../community/community-selectors";

import { fetchSong } from "../../song/song-actions";
import { fetchNearPeople } from "../../community/community-actions";

import Map from "../../../views/map/Map";

const mapStateToProps = (state) => ({
  currentUserState: currentUserStateSelector(state),
  songState: songStateSelector(state),
  communityState: communityStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchSong: () => dispatch(fetchSong()),
  fetchNearPeople: (point) => dispatch(fetchNearPeople(point)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
