import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav >
               
            {/* first thing i want is the logo. */}
            <div className="header">
            <a href="https://www.jio.com/">
                <img className="header_logo" src="https://cdn.ndtv.com/tech/images/gadgets/thumb/reliance_jio_small.jpg"></img>
            </a>

            <div className="heading">
                <h1>X-Ray Search</h1>
            </div>
                
            </div>
            
            <div className="gradient" ></div>
        </nav>
    )
}

export default Header
