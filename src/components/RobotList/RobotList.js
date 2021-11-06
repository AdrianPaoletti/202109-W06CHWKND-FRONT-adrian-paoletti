import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = () => {
  const { loadRobot, robots } = useRobots();

  useEffect(() => { loadRobot(); }, [loadRobot]);

  return (
    <ul className="card-group">
      {robots.map((robot) => (
        <RobotCard key={robot["_id"]} robotObject={robot} />
      ))
      }
    </ul>
  )
}

export default RobotList;