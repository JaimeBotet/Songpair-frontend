import { combineReducers } from "redux";

import UserReducer from "./user/user-reducer";
import SongReducer from "./song/song-reducer";
import CommunityReducer from "./community/community-reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  song: SongReducer,
  community: CommunityReducer,
});

export default rootReducer;
