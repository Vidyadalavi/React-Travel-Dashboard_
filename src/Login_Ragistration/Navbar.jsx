import React from "react";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar =()=>{
    const navigate=useNavigate();
    const goToLogin=()=>{
        navigate("/login");
    }

    
    return(
        <div className="mainNavbar">
        <div >
            <nav className="navbar">
            
                <ul>
                    <li>
                    <FontAwesomeIcon icon={faEarthEurope} className="icon"/>
                    <a className="head">TrailBliss</a>
                    <a>About</a>
                     </li>               
                    
                </ul>
                 <div className="navLoginButton">
                 <button onClick={goToLogin} className="navLoginButton">Login</button>
                    </div>

            </nav>
            </div>
            </div>
    )
}
export default Navbar;