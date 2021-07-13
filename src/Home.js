import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import dribble from "./img/dribble.png"
import xing from "./img/xing.png"
import stack from "./img/stack.png"
function Home() {
    return (
        <div className="body">
            <h3 className="header-text">Choose the website you want to make the X-Ray Search on : </h3>
            <ul>
                <li>
                    <div className="website_option">
                        <Link to="./Linkedin" style={{textDecoration:'none'}}>    
                            <h3 className="web-name">Linkedin</h3>
                        
                        </Link>
                        <img className="logo link" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="linkedin_logo"></img>
                    </div>
                </li>
                <li>
                    <div className="website_option">
                        <Link to="./github" style={{textDecoration:'none'}}>
                        <h3 className="web-name">Github</h3>
                        </Link>
                        <img className="logo git" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFQAzDc8TRNcsSQ6o2Nll48B9mGDC9-jBoQ&usqp=CAU" alt="github_logo"></img>
                    </div>
                </li>
                <li>
                <div className="website_option">
                        <Link to="./dribble" style={{textDecoration:'none'}}>
                        <h3 className="web-name">Dribble</h3>
                        </Link>
                        <img className="logo drib" src={dribble} alt="dribble_logo"></img>
                    </div>
                </li>
                <li>
                <div className="website_option">
                        <Link to="./xing" style={{textDecoration:'none'}}>
                        <h3 className="web-name">Xing</h3>
                        </Link>
                        <img className="logo x" src={xing} alt="xing_logo"></img>
                    </div>
                    <li>
                    <div className="website_option">
                        <Link to="./stack" style={{textDecoration:'none'}}>
                        <h3 className="web-name">Stack Overflow</h3>
                        </Link>
                        <img className="logo stack" src={stack} alt="stack_logo"></img>
                    </div>
                    </li>
                </li>
           </ul>


        </div>
    )
}

export default Home
