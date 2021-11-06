import actionTypes from "../actions/actionTypes";

const initialState = [];
const robotsReducer = (robots = initialState, action) => {

  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobot:
      newRobots = [...action.robots];
      break;

    default:
      newRobots = robots;
  }
  return newRobots;
}

export default robotsReducer;