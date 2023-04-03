import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError'
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AccountCard from './components/AccountCard';
import AddExperience from './components/AddExperience';
import { useEffect,useState } from 'react';

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      setUser(true);
    }else{
      setUser(false)
    }
  },[]);


  return (
    <Router>
      <Header user={user}/>
      {/* <div className='bg-gray-800  dark:text-gray-100 min-h-screen' > */}
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Welcome />} />
          <Route path="/home" element={user ? <Home />: <Navigate to="/" />} />
          <Route path={"/login"} element={user ? <Navigate to="/" /> : <Authentication bool={true} />}/>
          <Route path={"/signup"} element={user ? <Navigate to="/" /> : <Authentication/>} />
          <Route path={"/profile"} element={<Profile user={user}/>} />
          <Route path={"/user"} element={<AccountCard/>} />
          <Route path={"/500"} element={<ServerError/>} />
          <Route path={"/test"} element={<AddExperience/>} />
          <Route path={"*"} element={<NotFound/>} />
        </Routes>
      {/* </div> */}
      <ToastContainer theme="dark" />
    </Router>

  );
}

export default App;
