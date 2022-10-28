import React from 'react'
import axios from "axios"
// import Order from '../../../server/models/Order'

export default function OrderScreen(order) {
    try{
        const response = axios.post("/orders")
        console.log(response)
    }catch(e){
        console.log("somthing went wrong")
    }
  return (
    <div>
        <h2 style={{fontSize:"35px"}}>My Order</h2>
        <div className='row'>

            <div className='col-md-8'>
<div className='flex-container'>
<div></div>
<div></div>
<div></div>
</div>
            </div>
        </div>
    </div>
  )
}
