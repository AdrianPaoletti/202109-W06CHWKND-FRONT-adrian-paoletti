import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = () => {
  const { loadRobot, robots, deleteRobot, loadCurrentRobot } = useRobots();

  useEffect(() => { loadRobot(); }, [loadRobot]);

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