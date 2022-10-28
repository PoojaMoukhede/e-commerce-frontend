import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import {useState,useNavigate} from "react"
import axios from "axios"

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };
  try{
    axios.post("/login")
    console.log("sucess")
}catch(e){
   console.log("faild")
}
  


  return (
    <div>
<form className='form' onSubmit={(e) => e.preventDefault()}>
    
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" onChange={(e) => handleChange(e)}/>
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
  
  
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control"  onChange={(e) => handleChange(e)}/>
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
   
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
       
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>
  
      <div class="col">
        
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    
   <Link to="/"><button type="button" class="btn btn-primary btn-block mb-4">Sign in</button></Link>
  
    
    <div class="text-center">
     <p>Not a member?<Link to="/register"><a href="#!">Register</a></Link></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
    </div>
  )
}
   
