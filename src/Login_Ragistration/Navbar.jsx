import React from "react";
import Home from "./Home";
import SignUp from "./SignUp";
const Navbar =()=>{
    return(
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                    <a className="head" >Explore!</a>      
                     <a href="/">SignUp</a> 
                    <a href="/login">Login</a> 
                    </li>               
                    
                </ul>

            </nav>
        </div>
    )
}
export default Navbar;