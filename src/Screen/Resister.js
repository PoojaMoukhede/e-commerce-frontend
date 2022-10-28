import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import {useState,useNavigate} from "react"
import axios from "axios"

export default function Resister() {
  const [user, setUser] = useState({
    email:'', password:'', Confirm_password: ''
})

const onChangeInput = e =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
}

try{
    axios.post("/register")
    console.log("sucess")
}catch(e){
   console.log("faild")
}

  return (
    <div>
<form className='form' onSubmit={(e) => e.preventDefault()}>
    
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" onChange={onChangeInput}/>
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
  
  
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" onChange={onChangeInput}/>
      <label class="form-label" for="form2Example2">Password</label>
    </div>
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" onChange={onChangeInput} />
      <label class="form-label" for="form2Example2">Confirm Password</label>
    </div>
   
  
    
  <Link to="/"><button type="button" class="btn btn-primary btn-block mb-4">Sign in</button></Link>
    <p>Please Sign In</p>
  </form>

    </div>
  )
}
