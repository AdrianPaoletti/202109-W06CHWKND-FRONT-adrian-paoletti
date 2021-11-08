/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import useRobots from "../../hooks/useRobots";

const RobotForm = () => {

  const { createRobot, currentRobot, updateRobot } = useRobots();

  const initialRobotFeatures = useMemo(() => ({
    speed: "",
    endurance: "",
    date: ""
  }), []);

  const initialRobotBasic = useMemo(() => ({
    name: "",
    image: "",
    features: initialRobotFeatures,
  }), [initialRobotFeatures]);

  const [robotBasic, setrobotBasic] = useState(initialRobotBasic);
  const [robotFeatures, setrobotFeatures] = useState(initialRobotFeatures);
  const [textButton, setTextButton] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (currentRobot.isEditing) {
      currentRobot.robot.features.date = currentRobot.robot.features.date.split("T")[0]
      setrobotBasic(currentRobot.robot);
      setrobotFeatures(currentRobot.robot.features);
      setTextButton("Update");
    } else {
      setrobotBasic(initialRobotBasic);
      setTextButton("Create");
    }
  }, [currentRobot, initialRobotBasic])

  useEffect(() => {
    setButtonDisabled(robotBasic.name === "" || robotBasic.image === "" || robotFeatures.speed === ""
      || robotFeatures.endurance === "" || robotFeatures.date === "" || robotFeatures.speed.length > 2 || robotFeatures.endurance.length > 2);
  }, [robotBasic, robotFeatures]);

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
    if (currentRobot.isEditing) {
      updateRobot({ ...robotBasic, "_id": currentRobot.robot["_id"] })
    }
    else {
      setrobotBasic({
        ...robotBasic,
        features: { ...robotFeatures }
      });
      createRobot(robotBasic);
    }

    setrobotBasic(initialRobotBasic);
    setrobotFeatures(initialRobotFeatures);
  }
  useEffect(() => {
    setrobotBasic({
      ...robotBasic,
      features: { ...robotFeatures }
    });
  }, [robotFeatures]);

  return (
    <form autoComplete="off" onSubmit={onSubmit} className="form">
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
          <input type="number" className={robotFeatures.speed.speed > 2 ? "is-invalid form-control form-control-sm" : "form-control form-control-sm"} id="speed" value={robotFeatures.speed} onChange={onChangeFeatures} placeholder="Speed" min="0" max="10" />
        </div>
        <div className="col-4">
          <label htmlFor="endurance">Endurance:</label>
          <input type="number" className={robotFeatures.speed.endurance > 2 ? "is-invalid form-control form-control-sm" : "form-control form-control-sm"} id="endurance" value={robotFeatures.endurance} onChange={onChangeFeatures} placeholder="Endurance" min="0" max="10" />
        </div>
        <div className="col-4">
          <label htmlFor="date">Creation date:</label>
          <input type="date" className="form-control form-control-sm" id="date" value={robotFeatures.date} onChange={onChangeFeatures} placeholder="Creation date" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" disabled={buttonDisabled}>{textButton}</button>
    </form>
  )
}

export default RobotForm;