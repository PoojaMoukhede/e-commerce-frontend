import React, { useEffect } from 'react'
import Product from '../components/Product'
import products from '../product'
import "./Home.css"

export default function Home() {

  useEffect(()=>{
    fetch(`http://localhost:8080/`)
    .then((response) => console.log(response));
  },[])
  return (
    <>
       <div className='row justify-content-center'>
         {products.map(pro=>{
            return (
               <Product pro={pro}/>
              
            )
         })}
       </div>
      
    </>
  )
}
