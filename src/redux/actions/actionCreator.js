import actionTypes from "./actionTypes";

export const loadRobotAction = (robots) => ({
  type: actionTypes.loadRobot,
  robots,
});