const RobotCard = () => {
  return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  )
}

export default RobotCard;