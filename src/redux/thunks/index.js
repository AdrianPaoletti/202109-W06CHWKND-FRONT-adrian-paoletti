import { createRobotAction, loadRobotAction } from "../actions/actionCreator";

const urlAPIGet = "https://robots-co.herokuapp.com/robots";
const urlAPICreate = "https://robots-co.herokuapp.com/robots/create"

export const loadRobotThunks = () => {
  return async (dispatch) => {
    const response = await fetch(urlAPIGet);
    const robots = await response.json();
    dispatch(loadRobotAction(robots));
  };
};

export const createRobotThunks = (robot) => {
  return async (dispatch) => {
    const response = await fetch(urlAPICreate, {
      method: "POST",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const robots = await response.json();

    dispatch(createRobotAction(robots))
  }
}