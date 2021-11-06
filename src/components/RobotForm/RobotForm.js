
const RobotForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" name="name" id="name" placeholder="Introduce Robot Name" />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image url:</label>
        <input type="text" className="form-control" name="image" id="image" placeholder="Introduce Robot Image URL" />
      </div>
      <div className="form-row">
        <div className="col-4">
          <label htmlFor="speed">Speed:</label>
          <input type="text" className="form-control form-control-sm" id="speed" placeholder="Speed" />
        </div>
        <div className="col-4">
          <label htmlFor="endurance">Endurance:</label>
          <input type="text" className="form-control form-control-sm" id="endurance" placeholder="Endurance" />
        </div>
        <div className="col-4">
          <label htmlFor="date">Creation date:</label>
          <input type="text" className="form-control form-control-sm" id="endurance" placeholder="Creation date" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  )
}

export default RobotForm;