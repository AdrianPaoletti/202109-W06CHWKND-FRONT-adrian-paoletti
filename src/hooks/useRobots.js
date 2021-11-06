import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createRobotThunks, loadRobotThunks } from "../redux/thunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobot = useCallback(() => {
    dispatch(loadRobotThunks())
  }, [dispatch]);

  const createRobot = (robot) => {
    dispatch(createRobotThunks(robot));
  }

  return { loadRobot, createRobot, robots }
}

export default useRobots;