import React from 'react'
import "./Style.css"
import StripeCheckout from "react-stripe-checkout"
export default function Checkout({SubTotal}) {
    function tokenHandler(token){
        console.log(token)
    }
  return (
    <div>
       <StripeCheckout
       amount={SubTotal}
       shippingAddress
       token={tokenHandler}
       stripeKey="pk_test_51LxZNrSEaWwG4qfpq5ph7Iv6WjpDfcaFuRUMY15PRB9TyNHznFcu3lp5dpx6XaeCNL5cKlj6x6Psj8QjfELcVerM001qA0MvQO"
       currency="INR"
       
       >
        <button className='btn'>Pay now</button>
       </StripeCheckout>
    </div>
  )
}
