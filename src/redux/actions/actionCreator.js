import actionTypes from "./actionTypes";

export const loadRobotAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});

export const updateRobotAction = (robot) => ({
  type: actionTypes.updateRobot,
  robot,
});

export const loadCurrentRobotAction = (robot) => ({
  type: actionTypes.loadCurrentRobot,
  robot,
});

export const resetCurrentRobotAction = () => ({
  type: actionTypes.resetCurrentRobot,
})

