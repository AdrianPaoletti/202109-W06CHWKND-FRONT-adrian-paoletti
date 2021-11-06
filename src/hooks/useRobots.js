import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadRobotThunks } from "../redux/thunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobot = useCallback(() => {
    dispatch(loadRobotThunks())
  }, [dispatch])

  return { loadRobot, robots }
}

export default useRobots;