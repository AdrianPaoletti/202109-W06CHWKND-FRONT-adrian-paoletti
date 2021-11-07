import { createRobotAction, deleteRobotAction, loadRobotAction, updateRobotAction } from "../actions/actionCreator";

const urlAPIGet = "https://robots-co.herokuapp.com/robots";
const urlAPICreate = "https://robots-co.herokuapp.com/robots/create";
const urlAPIDelete = "https://robots-co.herokuapp.com/robots/delete/";
const urlAPIUpdate = "https://robots-co.herokuapp.com/robots/update";

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

export const deleteRobotThunk = (id) => {
  return async (dispatch) => {
    await fetch(`${urlAPIDelete}${id}`, {
      method: "DELETE"
    })

    dispatch(deleteRobotAction(id));
  }
}

export const updateRobotThunk = (robot) => {
  return async (dispatch) => {
    const response = await fetch(`${urlAPIUpdate}`, {
      method: "PUT",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const updatedRobot = await response.json();
    dispatch(updateRobotAction(updatedRobot))
  }
}