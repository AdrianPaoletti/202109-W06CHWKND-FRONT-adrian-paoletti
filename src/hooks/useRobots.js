import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createRobotThunks, deleteRobotThunk, loadRobotThunks } from "../redux/thunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
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

  return { loadRobot, createRobot, robots, deleteRobot }
}

export default useRobots;