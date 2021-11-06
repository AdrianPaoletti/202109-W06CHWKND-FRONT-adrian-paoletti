import { useState } from "react";
import useRobots from "../../hooks/useRobots";

const RobotForm = () => {

  const { createRobot } = useRobots();

  const initialRobotFeatures = {
    speed: "",
    endurance: "",
    date: ""
  };

  const initialRobotBasic = {
    name: "",
    image: "",
    features: initialRobotFeatures,
  }

  const [robotBasic, setrobotBasic] = useState(initialRobotBasic);
  const [robotFeatures, setrobotFeatures] = useState(initialRobotFeatures);

  const onChangeBasic = (event) => {
    setrobotBasic({
      ...robotBasic,
      [event.target.id]: event.target.value,
    });
  }

  const onChangeFeatures = (event) => {
    setrobotFeatures({
      ...robotFeatures,
      [event.target.id]: event.target.value,
    });
    setrobotBasic({
      ...robotBasic,
      features: { ...robotFeatures }
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    createRobot(robotBasic);
    setrobotBasic(initialRobotBasic);
    setrobotFeatures(initialRobotFeatures);
  }

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" name="name" id="name" value={robotBasic.name} onChange={onChangeBasic} placeholder="Introduce Robot Name" />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image url:</label>
        <input type="text" className="form-control" name="image" id="image" value={robotBasic.image} onChange={onChangeBasic} placeholder="Introduce Robot Image URL" />
      </div>
      <div className="form-row">
        <div className="col-4">
          <label htmlFor="speed">Speed:</label>
          <input type="number" className="form-control form-control-sm" id="speed" value={robotFeatures.speed} onChange={onChangeFeatures} placeholder="Speed" min="0" max="10" />
        </div>
        <div className="col-4">
          <label htmlFor="endurance">Endurance:</label>
          <input type="number" className="form-control form-control-sm" id="endurance" value={robotFeatures.endurance} onChange={onChangeFeatures} placeholder="Endurance" min="0" max="10" />
        </div>
        <div className="col-4">
          <label htmlFor="date">Creation date:</label>
          <input type="date" className="form-control form-control-sm" id="date" value={robotFeatures.date} onChange={onChangeFeatures} placeholder="Creation date" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
      <pre>{JSON.stringify(robotBasic, null, 2)}</pre>
    </form>
  )
}

export default RobotForm;