import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate=useNavigate();
    const goToRagister=()=>{
        navigate("/Signup");
    }

return(
<div>

<div className="home">
<Navbar/>
    <div id="container">
    <h1 >Explore The World With TrailBliss</h1>
    
   <h3>Discover breathtaking destinations, unforgettable experiences, and affordable travel packages tailored just for you.</h3>
   <button onClick={goToRagister} className="homeRagister">Ragister Now!</button>
    </div>
    </div>
    
</div>
)

}
export default Home;