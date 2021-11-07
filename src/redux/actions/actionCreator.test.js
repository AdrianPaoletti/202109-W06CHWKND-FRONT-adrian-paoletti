import { getRandomRobot, getRandomRobots } from "../../factories/robotFactory"
import { createRobotAction, deleteRobotAction, loadCurrentRobotAction, loadRobotAction, updateRobotAction } from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a load actionCreator", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a load type action with the robots received", () => {
      const robotList = getRandomRobots();
      const expectedActoin = {
        type: actionTypes.loadRobots,
        robots: robotList
      };
      const actionResult = loadRobotAction(robotList);

      expect(actionResult).toEqual(expectedActoin)
    })
  })
})

describe("Given a create actionCreator", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a create type action with the robots received", () => {
      const robotList = getRandomRobots();
      const expectedActoin = {
        type: actionTypes.createRobot,
        robot: robotList
      };
      const actionResult = createRobotAction(robotList);

      expect(actionResult).toEqual(expectedActoin)
    })
  })
})

describe("Given a update actionCreator", () => {
  describe("When it receives a robot", () => {
    test("Then it should return a update type action with the robot received", () => {
      const modifiedRobot = getRandomRobot();
      const expectedActoin = {
        type: actionTypes.updateRobot,
        robot: modifiedRobot
      };
      const actionResult = updateRobotAction(modifiedRobot);

      expect(actionResult).toEqual(expectedActoin)
    })
  })
})

describe("Given a delete actionCreator", () => {
  describe("When it receives an id", () => {
    test("Then it should return a delete type action with the id received", () => {
      const id = 2;
      const expectedActoin = {
        type: actionTypes.deleteRobot,
        id,
      };
      const actionResult = deleteRobotAction(id);

      expect(actionResult).toEqual(expectedActoin)
    })
  })
})

describe("Given a loadCurrent actionCreator", () => {
  describe("When it receives a robot", () => {
    test("Then it should return a loadCurrent type action with the robot received", () => {
      const newRobot = getRandomRobot();
      const expectedActoin = {
        type: actionTypes.loadCurrentRobot,
        robot: newRobot
      };
      const actionResult = loadCurrentRobotAction(newRobot);

      expect(actionResult).toEqual(expectedActoin)
    })
  })
})