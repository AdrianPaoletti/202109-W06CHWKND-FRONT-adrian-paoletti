import { useEffect, useState } from "react";
import useRobots from "../../hooks/useRobots";

const LoginForm = () => {

  const initialLogin = {
    username: "",
    password: "",
  }
  const { loginUser } = useRobots();
  const [userData, setUserData] = useState(initialLogin);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(userData);
  }

  const onChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    setButtonDisabled(userData.username === "" || userData.password === "")
  },
    [userData]);

  return (
    <form autoComplete="off" onSubmit={onSubmit} className="form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" className="form-control" name="username" id="username" value={userData.username} onChange={onChange} placeholder="Introduce username" />
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" name="password" id="password" value={userData.password} onChange={onChange} placeholder="Introduce password" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={buttonDisabled}>Login</button>
    </form>
  )
}

export default LoginForm;