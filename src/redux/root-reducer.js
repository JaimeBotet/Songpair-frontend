import { combineReducers } from "redux";

import UserReducer from "./user/user-reducer";
import SongReducer from "./song/song-reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  song: SongReducer,
});

export default rootReducer;
