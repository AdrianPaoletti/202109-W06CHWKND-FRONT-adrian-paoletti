
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RobotForm from './components/RobotForm/RobotForm';
import RobotList from './components/RobotList/RobotList';
import useRobots from './hooks/useRobots';

function App() {
  const { user } = useRobots();

  /*useEffect(() => {
    const token = JSON.parse(localStorage.getItem("adrian"));
    if (token) {
      console.log(
        jwtDecode(token)
      )
    }
  }, [loginUser]);*/

  return (
    <>
      <h1>Robots & Co</h1>
      {user.isAuthenticated ? (
        <>
          <RobotForm />
          <RobotList />
        </>
      ) : <LoginForm isAuthenticated={user.isAuthenticated} />}
    </>
  )
}

export default App;
