import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = () => {
  const { loadRobot, robots, deleteRobot, loadCurrentRobot, updateRobot } = useRobots();

  useEffect(() => { loadRobot(); }, [loadRobot, updateRobot]);

  return (
    <div className="card-deck card-container">
      {robots.map((robot) => (
        <RobotCard key={robot["_id"]} robotObject={robot} deleteClick={() => deleteRobot(robot["_id"])} updateClick={() => loadCurrentRobot(robot)} />
      ))
      }
    </div>
  )
}

export default RobotList;