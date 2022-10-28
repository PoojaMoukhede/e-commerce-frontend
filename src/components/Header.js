import React from 'react'
// import "./Style.css"
import {Link} from "react-router-dom"
// import Login from "./Login"

export default function Header() {
    return (
        <div class="shadow-lg  mb-3  rounded">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">BIG BAZAR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <a className="nav-item nav-link" href="/login">Login</a>
                    <a className="nav-item nav-link" href="/order">Order</a>
                   <a className="nav-item nav-link" href="/cart"><i class="fa-solid fa-cart-shopping"></i></a>
                </ul>
            </div>
        </nav>
        </div>
    )
}
