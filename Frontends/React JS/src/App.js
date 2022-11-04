import React, {Component} from 'react';
import AddFlight from './components/AddFlight';
import Header from './components/Header'
import Index from './components/Index'
import {BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Airports from './components/Airports'
import EditFlightx from './components/EditFlightx';
import LoginPage from './components/LoginPage';
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer3';
import Home from './components/Home';
import NavBar from './components/Navbar';
import './App.css'


class App extends Component
{
    render() {
        return(
          <div>
            
            <BrowserRouter>
                <div >
                  <Routes>
                  <Route path="/" exact element={<div className="App"><NavBar/><Home/><Footer3/></div>}/>
                    <Route path="/login" element={<div><LoginPage/><Footer2/></div>}/>
                    <Route path="/flights" element={<div><Header/><Index/><Footer2/></div>}/>
                    <Route path="/add-flight" element={<div><Header/><AddFlight/><Footer2/></div>}/>
                    <Route path="/airports" element={<div><Header/><Airports/><Footer2/></div>}/>
                    <Route path={"/edit-flight/:id"} element={<div><Header/><EditFlightx/><Footer2/></div>}/>
                  </Routes>
                </div>
            </BrowserRouter>
          </div>
        )
    }
}
export default App