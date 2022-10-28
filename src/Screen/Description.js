import React,{useState}from 'react'
import products from '../product'
import {Link} from "react-router-dom"

export default function Description({pro}){
   const [quantity,setquantity]=useState(1)
    // const proId=match.params.id;
    const product = products.find(product => product.id == product.id) ;

    function addToCart(){
      var item={
         name:product.name,
         _id:product._id,
         image:product.image,
         quantity:product.quantity,
         price:product.price,
         prices:product.price[0]*quantity
      }
      if(item.countInStock>pro.countInStock){
         alert("no more items")
      }
    localStorage.setItem("items",JSON.stringify(item))
    }
    const items=localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[]

   //  const initalState={
   //    items:items
   //  }


  return (
    <>
    <div>
       <div className='row'>
          <div className='col-md-6'>
             <div className='card p-3 m-1'>
                <h1>{product.name}</h1>
                <img src={product.image} className="img-fluid m-3 des-img"/>
                <p>{product.description}</p>
             </div>
          </div>
          <div className='col-md-6'>
            <div className='m-2'>
                 <h2>Price : ₹{product.price}</h2>
                 <hr></hr>
                 <h1>Quantity</h1>
                 <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>{[...Array(product.countInStock)].map((value,index)=>{
                 return(
                  <option value={index+1}>{index+1}</option>
                 )
                 })}</select> 
                 {/* <button type="button" class="btn btn-info bg-light" onClick="">-</button>
                 <button type="button" class="btn btn-info bg-light" onClick="">0</button>
                 <button type="button" class="btn btn-info bg-light" onClick="">+</button> */}
                 <hr></hr>
                {/* <Link to="/cart"><button className='btn btn-dark'>Add To Cart</button></Link>  */}
               <Link to="/cart"> <button className='btn btn-dark'>Add To Cart</button></Link>
            </div>

          </div>
       </div>
    </div>
    </>
    
  )
}
