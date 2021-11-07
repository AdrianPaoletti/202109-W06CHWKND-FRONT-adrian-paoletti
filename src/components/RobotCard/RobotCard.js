const RobotCard = ({ robotObject, deleteClick, updateClick }) => {
  return (
    <div className="card card-width" >
      <img className="card-img-top" src={robotObject.image} alt="Card" width="100" height="200" />
      <div className="card-body">
        <h5 className="card-title">{robotObject.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><span className="fw-bold">Speed: </span>{robotObject.features.speed}</li>
        <li className="list-group-item"><span className="fw-bold">Endurance: </span>{robotObject.features.endurance}</li>
        <li className="list-group-item"><span className="fw-bold">Date Creation: </span>{robotObject.features.date.split("T")[0]}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-primary" onClick={updateClick}>Edit</button>
        <button className="btn btn-danger" onClick={deleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default RobotCard;