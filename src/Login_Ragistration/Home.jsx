import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Home(){
 const navigate =useNavigate();

    const logout=()=>{
        localStorage.removeItem("user");
        navigate("/");
    }

return(
<div>
<Navbar/>
<div className="home">
    <h2 >
        Welcome Home!
    </h2>
    <button onClick={logout}>Log Out</button>
    </div>
    
</div>
)

}
export default Home;