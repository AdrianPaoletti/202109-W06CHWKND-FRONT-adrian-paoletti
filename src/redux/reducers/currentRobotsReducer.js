import actionTypes from "../actions/actionTypes";

const currentRobotsReducer = (currentRobot = { isEditing: false, robot: {} }, action) => {

  let newCurrentRobot;
  switch (action.type) {

    case actionTypes.loadCurrentRobot:
      newCurrentRobot = { robot: action.robot, isEditing: true };
      break;
    case actionTypes.resetCurrentRobot:
      newCurrentRobot = { robot: {}, isEditing: false };
      break
    default: newCurrentRobot = currentRobot;
  }
  return newCurrentRobot;
}

export default currentRobotsReducer;
