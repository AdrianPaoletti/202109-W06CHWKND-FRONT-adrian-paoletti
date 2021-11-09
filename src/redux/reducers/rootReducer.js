import { combineReducers } from "redux";
import currentRobotsReducer from "./currentRobotsReducer";
import robotsReducer from "./robotsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  currentRobot: currentRobotsReducer,
  user: userReducer,
});

export default rootReducer