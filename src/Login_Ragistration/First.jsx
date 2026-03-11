import React from "react";
import "./First.css";
import Navbar from "./Navbar";
import SingnUp from "./SignUp";

const First =()=>{
    return(
    <div>  
    <div>
        <Navbar/>
    </div>
    <div style={{
        backgroundImage: `url(https://santoyo.dev/images/code.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}>
      <h1></h1>

      </div>
      

    </div>
    )
}
export default First;