import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadCurrentRobotAction, resetCurrentRobotAction } from "../redux/actions/actionCreator";
import { createRobotThunks, deleteRobotThunk, loadRobotThunks, updateRobotThunk } from "../redux/thunks";
import { loginUserThunk } from "../redux/thunks/userThunk";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const currentRobot = useSelector(({ currentRobot }) => currentRobot);
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loadRobot = useCallback(() => {
    dispatch(loadRobotThunks())
  }, [dispatch]);

  const createRobot = (robot) => {
    dispatch(createRobotThunks(robot));
  }

  const deleteRobot = (id) => {
    dispatch(deleteRobotThunk(id));
  }

  const loadCurrentRobot = (robot) => {
    dispatch(loadCurrentRobotAction(robot));
  }

  const updateRobot = (robot) => {
    dispatch(updateRobotThunk(robot));
    dispatch(resetCurrentRobotAction());
  }

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  }

  return { loadRobot, createRobot, robots, user, deleteRobot, loadCurrentRobot, currentRobot, updateRobot, loginUser }
}

export default useRobots;