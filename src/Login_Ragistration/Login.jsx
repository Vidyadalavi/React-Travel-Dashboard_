import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail]=useState("");
    const [password, setaPassword]=useState("");
    const [msg, setMsg]=useState("");

    const navigate= useNavigate();

    const handleInput=(e)=>{
        const value= e.target.value;
        const name= e.target.name;

        if("email" == name){
            setEmail(value)
        }
        if("password"== name){
            setaPassword(value);
        }
    }

    const handleSubmit=(e)=>{
         e.preventDefault();


         if(email==""||password==""){
            alert("pleas Enter Details");
         }else{
         const getDetials =JSON.parse(localStorage.getItem("user"));
         console.log(getDetials);
         getDetials.map((curValue)  =>{ 
         let storeEmail =curValue.email;
         let storePassword = curValue.password;

         if(storeEmail == email && storePassword == password){
            alert("Login Succesfully");
            navigate("/home");
        
         }else{
            return setMsg("Invaild email or password")
         }
})}}
return(
<div>
<Navbar/>
    <div >
    
        <form onSubmit={handleSubmit} className="login-form">
        <div>
            <p className="heading">Login</p>
        </div>
        <div>
            <input type="text" name="email" placeholder="Enter your Email" onChange={handleInput}/>
            <input type="password" name="password" placeholder="Enter your Password" onChange={handleInput}/>
            <p>If you have to create account?<a href="/">Ragister here!</a></p>
              <p className="msg">{msg}</p>
            <button>Log In</button>

        </div>
    </form>
    </div>
</div>
)

}
export default Login;