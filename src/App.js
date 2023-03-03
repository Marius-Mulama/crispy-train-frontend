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
// import { useEffect, useState } from 'react';
// import User from './components/User';
import AccountCard from './components/AccountCard';
import AddExperience from './components/AddExperience';

function App() {

  // const [user, setUser] = useState(null);

  // useEffect(()=>{
  //   const getUser = ()=>{
  //     fetch("http://localhost:8000/auth/login/success",{
  //       method:"GET",
  //       credentials:"include",
  //       headers:{
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       }
  //     }).then(response=>{
  //       console.log(1)
  //       if(response.status === 200){
  //         return response.json()
  //       }else{
  //         throw new Error("Authentication has failed")
  //       }
  //     }).then((resObject)=>{
  //       console.log(2)
  //       setUser(resObject.user)
  //     }).catch((err)=>{
  //       console.log(err)
  //     })
  //   }

  //   getUser()
  // },[])

  // setUser(true)
  const user = true;

  console.log(user)

  return (
    <Router>
      <Header user={user}/>
      <div className='bg-gray-800  dark:text-gray-100 min-h-screen' >
        <Routes>
          <Route path={"/"} element={user? <Home/> : <Welcome/>} />
          <Route path={"/login"} element={user ? <Navigate to="/" /> : <Authentication bool={true} />}/>
          <Route path={"/signup"} element={user ? <Navigate to="/" /> : <Authentication/>} />
          <Route path={"/profile"} element={<Profile user={user}/>} />
          <Route path={"/user"} element={<AccountCard/>} />
          <Route path={"/500"} element={<ServerError/>} />
          <Route path={"/test"} element={<AddExperience/>} />
          <Route path={"*"} element={<NotFound/>} />
        </Routes>
      </div>
      <ToastContainer theme="dark" />
    </Router>

  );
}

export default App;
