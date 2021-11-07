import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadCurrentRobotAction, resetCurrentRobotAction, updateRobotAction } from "../redux/actions/actionCreator";
import { createRobotThunks, deleteRobotThunk, loadRobotThunks, updateRobotThunk } from "../redux/thunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const currentRobot = useSelector(({ currentRobot }) => currentRobot);
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

  return { loadRobot, createRobot, robots, deleteRobot, loadCurrentRobot, currentRobot, updateRobot }
}

export default useRobots;