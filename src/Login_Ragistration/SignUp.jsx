import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SingnUp(){

    const userDetail={
        name:"",
        email:"",
        password:""
    }
    
    const [data, setData]= useState(userDetail)

    const navigate = useNavigate();
const handleInput=(e)=>{
    console.log(e.target.value);
    console.log(e.target.name);
    const name=e.target.name;
    const value=e.target.value;

    setData({...data,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
      
      if (data.name ==""|| data.email == "" || data.password==""){
        alert("please Enter the Detail !")

      }else{
      const getData= JSON.parse(localStorage.getItem("user")||'[]');
      let arr =[];
      arr=[...getData];
      arr.push(data);
      localStorage.setItem("user", JSON.stringify(arr));
      alert("SignUp succesfully");
      navigate("/login");
      }

}
return(
<div >
<Navbar/>
<div className="main-page">
    <form onSubmit={handleSubmit}>
        <div>
            <p className="heading">Sign Up</p>
        </div>
        <div>
            <input type="text" name="name" placeholder="Enter your Name" onChange={handleInput}/>
            <input type="email" name="email" placeholder="Enter your Email" onChange={handleInput}/>
            <input type="password" name="password" placeholder="Enter your Password" onChange={handleInput}/>
            <p>Already have an account?<a href="/Login">Login</a></p>

            <button>SignUp</button>

        </div>
    </form>
    <div>
        <img src="https://media.gettyimages.com/id/1336438227/video/concept-of-students-distance-learning-or-business-womens-home-office-freelance-working-life.avif?s=640x640&k=20&c=YwrNuhiQ-jqcq_fQcASHTEmutOZ1hQEHdn-ivMs_Pno=" alt="image"/>
    
    </div>



</div>
</div>
)

}
export default SingnUp;