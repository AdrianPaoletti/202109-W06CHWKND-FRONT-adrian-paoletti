import { getRandomRobot, getRandomRobots } from "../../factories/robotFactory"
import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load action with 3 robots", () => {
    test("Then it should return a new robot list with the 3 robots received", () => {
      const initialRobots = [];
      const robotsList = getRandomRobots(3);
      const action = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      }

      const newList = robotsReducer(initialRobots, action);
      expect(newList).toEqual(robotsList);
    })
  })

  describe("When it receives a robot list and a create action with a robot", () => {
    test("Then it should return the robot list with the new robot created", () => {
      const initialRobots = getRandomRobots(3);
      const robotsCreated = getRandomRobot();
      const action = {
        type: actionTypes.createRobot,
        robot: robotsCreated,
      }

      const newList = robotsReducer(initialRobots, action);
      expect(newList).toContainEqual(robotsCreated);
    })
  })

  describe("When it receives a robot list and a delete action with a robot", () => {
    test("Then it should return the list robot without the challenge deleted", () => {
      const initialRobots = getRandomRobots(3);
      const robotsCreated = getRandomRobot();
      const action = {
        type: actionTypes.deleteRobot,
        id: robotsCreated["_id"],
      }

      const newList = robotsReducer(initialRobots, action);
      expect(newList).not.toContain(robotsCreated);
    })
  })

  describe("When it receives a robot list and a update action", () => {
    test("Then it should return the updated robot list without the challenge deleted", () => {
      const initialRobots = getRandomRobots(3);
      const robotModified = {
        ...initialRobots[1],
        name: 'asdf',
      }
      const action = {
        type: actionTypes.updateRobot,
        robot: robotModified,
        id: robotModified["_id"]
      }

      const newList = robotsReducer(initialRobots, action);
      expect(newList).toContainEqual(robotModified);
    })
  })

  describe("When it receives a incorrect type actoin", () => {
    test("Then it should return an empty array that is the default value", () => {
      const initialRobots = [];
      const robotsList = getRandomRobots(3);
      const action = {
        type: actionTypes.asdf,
        robots: robotsList,
      }

      const newRobot = robotsReducer(initialRobots, action);

      expect(newRobot).toEqual(initialRobots)
    })
  })


})