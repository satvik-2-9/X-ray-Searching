import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
function Home() {
    return (
        <div>
            <h3 className="header-text">Choose the website you want to make the X-Ray Search on : </h3>
            <ul>
                <li>
                    <div className="website_option">
                        <Link to="./Linkedin" style={{textDecoration:'none'}}>
                        <h3 className="web-name">Linkedin</h3>
                        </Link>
                        <img className="logo" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"></img>
                    </div>
                </li>
                <li>
                    <div className="website_option">
                        <Link to="./github" style={{textDecoration:'none'}}>
                        <h3 className="web-name">Github</h3>
                        </Link>
                        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFQAzDc8TRNcsSQ6o2Nll48B9mGDC9-jBoQ&usqp=CAU"></img>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Home
