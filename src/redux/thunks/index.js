import { loadRobotAction } from "../actions/actionCreator";

const urlAPI = "https://robots-co.herokuapp.com/robots";

export const loadRobotThunks = () => {
  return async (dispatch) => {
    const response = await fetch(urlAPI);
    const robots = await response.json();
    dispatch(loadRobotAction(robots));
  };
};