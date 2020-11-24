import { connect } from "react-redux";

import {
  songStateSelector,
} from "../../song/song-selectors";

import { fetchSong } from "../../song/song-actions";

import Map from "../../../views/map/Map";

const mapStateToProps = (state) => ({
  songState: songStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchSong: () => dispatch(fetchSong()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
