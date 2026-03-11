import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function SingnUp(){
    const [showPassword, setShowPassword]=useState(false);
    const [showConfirmPassword, setShowConfirmPassword]=useState(false);
     const [isHuman, setIsHuman] = useState(false);

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
    if (showPassword !== showConfirmPassword) {
  alert("password incorrect");
  return;
    }

function Register() {
  return (
    <form>
      <label>
        <input type="checkbox" required />
        {" "}I am human
      </label>

      <br /><br />
      <button type="submit">Register</button>
    </form>
  );
}


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isHuman) {
      setError("Please confirm you are human.");
      return;
    }

    setError("");
    console.log("Form submitted");
  };

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
<div id="singupPage" >
<Navbar/>
<div className="main-page">
    <form onSubmit={handleSubmit}>
        <div>
            <p className="heading">Sign Up</p>
        </div>
        <div>
            <input type="text" name="name" placeholder="Username" onChange={handleInput}/>
            <input type="email" name="email" placeholder="Email" onChange={handleInput}/>
            <div className="password-container">
            <input type={showPassword ? "text":"password"} name="password" placeholder="Password" onChange={handleInput}/>
            <span className="eyeIcon" onClick={() => setShowPassword(!showPassword)}>
            <FontAwesomeIcon icon={showPassword ?  faEye:faEyeSlash} />
            </span>
            </div>
            <div className="ConfirmPassword">
            <input type={showConfirmPassword ? "text":"password"} name="password" placeholder="Confirm Password" onChange={handleInput}/>
            <span className="eyeIcon"  onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            <FontAwesomeIcon icon={showConfirmPassword ? faEye:faEyeSlash} />
            </span>
              </div>
            <label className="label"><input type="checkbox" checked={isHuman} onChange={(e) => setIsHuman(e.target.checked)}/><span>I am human</span> </label>

           
            <p>Already have an account?<a href="/Login">Login</a></p>

            <button>SignUp</button>

        </div>
    </form>
    <div>
 
    </div>



</div>
</div>
)

}

export default SingnUp;