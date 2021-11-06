import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = () => {
  const { loadRobot, robots, deleteRobot } = useRobots();

  useEffect(() => { loadRobot(); }, [loadRobot]);

  const deleteOnClick = (id) => {
    deleteRobot(id);
  }

  return (
    <div className="card-group">
      {robots.map((robot) => (
        <RobotCard key={robot["_id"]} robotObject={robot} deleteClick={() => deleteOnClick(robot["_id"])} />
      ))
      }
    </div>
  )
}

export default RobotList;