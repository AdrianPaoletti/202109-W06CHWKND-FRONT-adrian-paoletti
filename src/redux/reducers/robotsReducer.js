import actionTypes from "../actions/actionTypes";

const initialState = [];
const robotsReducer = (robots = initialState, action) => {

  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobot:
      newRobots = [...action.robots];
      break;

    case actionTypes.createRobot:
      newRobots = [...robots, action.robot]
      break;

    case actionTypes.deleteRobot:
      newRobots = robots.filter((robot) => robot["_id"] !== action.id)
      console.log(action);
      break;

    default:
      newRobots = robots;
  }
  return newRobots;
}

export default robotsReducer;