import { combineReducers } from "redux";

import UserReducer from "./user/user-reducer";
import CommunityReducer from "./community/community-reducer";
// import SongReducer from "./song/song-reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  // song: SongReducer,
  community: CommunityReducer,
});

export default rootReducer;
