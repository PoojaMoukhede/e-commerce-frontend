import React from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Product({pro}) {
    // const navigate = useNavigate()

    // axios.get('http://localhost:8080/products')
    //     .then(function (response) {
    //         console.log(response);
    //         // alert("sucess");
    //         navigate("/")
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    return (
        <>
            <div className='col-md-3 m-3 card p-4'>
                <Link to={`product/${pro.id}`}>
                <img src={pro.image} className="img-fluid" />
                <h1>{pro.name}</h1>
                <h1><i className="fa fa-star" aria-hidden="true"></i> {pro.rating}</h1>
                <h1>Price: ₹{pro.price}</h1>
                </Link>
            </div>
        </>
    )
}
