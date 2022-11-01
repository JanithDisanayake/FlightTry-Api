import './App.css';
import NavBar from './components/Home/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';
import Login from './components/Home/login';
import Plans from './components/Home/Plans';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import dashboard from './components/Home/dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/plans' element={<Plans/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
