import React from 'react'
import "./index.css";
import {Routes, Route} from 'react-router-dom';
import Login from './Login_Ragistration/Login.jsx';
import Home from './Login_Ragistration/Home.jsx';
import SingnUp from './Login_Ragistration/SignUp.jsx';
import DashboardApp from './Component/DashboardApp.jsx';


function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path="/home" element={<DashboardApp/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/Signup" element={<SingnUp/>} />
       
      
    </Routes>
  );
}

export default App;
