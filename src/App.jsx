import React from 'react'
import "./index.css";
import {Routes, Route} from 'react-router-dom';
import Login from './Login_Ragistration/Login.jsx';
import Home from './Login_Ragistration/Home.jsx';
import SingnUp from './Login_Ragistration/SignUp.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SingnUp />} />
      <Route path="/login" element={< Login/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
  );
}

export default App
