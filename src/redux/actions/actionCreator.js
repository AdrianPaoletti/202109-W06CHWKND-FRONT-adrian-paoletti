import actionTypes from "./actionTypes";

export const loadRobotAction = (robots) => ({
  type: actionTypes.loadRobot,
  robots,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
})