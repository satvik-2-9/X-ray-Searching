import React from 'react'
import "./Header.css"
import {
    Navbar, Nav,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './img/a.png'; 
function Header() {
    return (
        <div >   
 <Navbar collapseOnSelect expand="lg"  variant="dark" className="bar"> 
  <Navbar.Brand className="txt" href="#home">X-Ray Search</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="./" className="txt" >Home</Nav.Link>
      <NavDropdown title="Target More Websites" className="txt" id="collasible-nav-dropdown">
        <NavDropdown.Item href="./Linkedin">Linkedin</NavDropdown.Item>
        <NavDropdown.Item href="./Github">Github</NavDropdown.Item>
        <NavDropdown.Item href="./">Choose from list</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href=".'/About">More deets</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
        </Navbar>

        <div className="imgdiv">
        <img src={logo} alt="hiring_proffessional"/>
        </div>
        <div className="gradient"></div>

            
        </div>
    )
}

export default Header
