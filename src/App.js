import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Authentication from './pages/Authentication';

function App() {
  return (

    <Router>
      <Header/> 
      <div className='bg-gray-800 min-h-full'>
        <Routes>
          <Route path={"/"} element={<Welcome/>} />
          <Route path={"/login"} element={<Authentication bool={true} />}/>
          <Route path={"/signup"} element={<Authentication/>} />
          <Route path={"*"} element={<NotFound/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
