import { combineReducers } from "redux";
import currentRobotsReducer from "./currentRobotsReducer";
import robotsReducer from "./robotsReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  currentRobot: currentRobotsReducer,
});

export default rootReducer