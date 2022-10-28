import React from 'react'
import Checkout from '../components/Checkout'
import products from '../product'
// import {addToCart} from "./Description"
export default function CartScreen(pro) {

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2 style={{ fontSize: "30px" }}>My Cart</h2>

          {products.map(pro => {
            return (
              <>
                <h1>{pro.name}</h1>
                <h1>Price: ₹{pro.price}</h1>
                <i className='fa fa-minus' aria-hidden='true' onClick={pro.countInStock - 1}></i>
                <b>Qnty</b>
                <i className='fa fa-plus' aria-hidden='true' onClick={pro.countInStock + 1}></i>
                <div className='m-1 w-100'>
                  <img src={pro.image} style={{ height: "70px", width: "80px" }} />
                </div>

                <div className='m-1 w-100'>
                  <i className='fa fa-trash' aria-hidden='true'></i>

                </div>
                <div className='col-md-4 text-right'>
                    <h2 style={{fontSize:"45px"}}>SubTotal :{pro.price}</h2>
                    <Checkout amount={pro.price}/>
                </div>
              </>
            )
          })}


        </div>
        <div className='col-md-4'>

        </div>

      </div>
    </div>
  )
}
