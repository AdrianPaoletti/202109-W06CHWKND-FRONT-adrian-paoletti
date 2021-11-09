import { createRobotAction, deleteRobotAction, loadRobotAction, updateRobotAction } from "../actions/actionCreator";

const urlAPI = process.env.REACT_APP_HEROKU;
const apiToken = process.env.REACT_APP_HEROKU;
let token;
export const loadRobotThunks = () => {
  return async (dispatch) => {
    token = JSON.parse(localStorage.getItem("adrian"));
    const response = await fetch(urlAPI, {
      headers: {
        Authorization: "Bearer " + token,
      }
    });

    const robots = await response.json();
    if (response.ok) {
      dispatch(loadRobotAction(robots));
    }

  };
};

export const createRobotThunks = (robot) => {
  return async (dispatch) => {
    const response = await fetch(`${urlAPI}create?token=${apiToken}`, {
      method: "POST",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    console.log(response);
    const robots = await response.json();

    dispatch(createRobotAction(robots))
  }
}

export const deleteRobotThunk = (id) => {
  return async (dispatch) => {
    await fetch(`${urlAPI}delete/${id}?token=${apiToken}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      }
    })

    dispatch(deleteRobotAction(id));
  }
}

export const updateRobotThunk = (robot) => {
  return async (dispatch) => {
    const response = await fetch(`${urlAPI}/update?token=${apiToken}`, {
      method: "PUT",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,

      },
    })
    const updatedRobot = await response.json();
    dispatch(updateRobotAction(updatedRobot))
  }
}