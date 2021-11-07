import actionTypes from "../actions/actionTypes";

const initialState = [];
const robotsReducer = (robots = initialState, action) => {

  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;

    case actionTypes.createRobot:
      newRobots = [...robots, action.robot]
      break;

    case actionTypes.deleteRobot:
      newRobots = robots.filter((robot) => robot["_id"] !== action.id)
      break;

    case actionTypes.updateRobot:
      newRobots = robots.map((robot) =>
        robot["_id"] === action.id ? {
          ...robot,
          ...action.robot,
        } : robot
      );
      break;

    default:
      newRobots = robots;
  }
  return newRobots;
}

export default robotsReducer;