import { getRandomRobot, getRandomRobots } from "../../factories/robotFactory"
import actionTypes from "../actions/actionTypes";
import currentRobotsReducer from "./currentRobotsReducer";

describe("Given a currentRobotReducer reducer", () => {
  describe("When it receives a current robot and a load action with a new current robot", () => {
    test("Then it should return a new current challenge equal to the one received", () => {
      const initialState = {
        robot: {},
        isEditing: false
      };

      const newRobot = getRandomRobot();
      const expectedState = {
        robot: newRobot,
        isEditing: true,
      }
      const action = {
        type: actionTypes.loadCurrentRobot,
        robot: newRobot,
      }

      const newState = currentRobotsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    })
  })

  describe("When it receives a current robot and an unknown action", () => {
    test("Then it should return the initialRobot received", () => {
      const initialRobot = getRandomRobot();
      const action = {
        type: actionTypes.asdf,
        robot: initialRobot,
      }

      const newState = currentRobotsReducer(initialRobot, action);

      expect(newState).toEqual(initialRobot);
    });
  });
})