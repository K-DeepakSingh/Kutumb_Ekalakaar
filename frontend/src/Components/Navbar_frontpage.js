import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom'
import './Frontpage.css'
import './Dashboard.css'
function Navbar_frontpage() {
    const mystyle={
        fontSize:"large",
        fontWeight:"500",
    }
    const back={
        backgroundColor:"white",
    }
  return (
    <Navbar style={{zIndex:"99"}} className='navbar nav_frontpage navbar-expand-lg ' bg="light" expand="lg">
       
      {/* <Container> */}
      <div className="container-fluid">
      <Link to='/'> 
      <Navbar.Brand className="navbar-brand"  style={{position:"static",marginLeft:"0px"}}> <img src="assets/images/logo1.jpg"  height="58" width="88" alt="logo"/>
          <span className="text-danger text"><strong>e</strong>kala</span>kaar 
       </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={mystyle}>
            <div className="navbar-nav" style={back}>
          <Nav className="me-auto">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/Patrondesc" className="nav-item nav-link">Patron</Link>
            <Link to="/Artistdesc" className="nav-item nav-link">Artists</Link>
            <Link to="/Partnerdesc" className="nav-item nav-link">Partners</Link>
            <Link to="/Artloversdesc" className="nav-item nav-link">Art Lovers</Link>
            <Link to="/Clients" className="nav-item nav-link">Clients</Link>
            <Link to="/Contact" className="nav-item nav-link">Contacts</Link>
          </Nav></div>
          <div className="navbar-nav ms-auto" style={back}>
              <Link to="/Login" className="nav-item nav-link ">Login/Join</Link>
          
          </div>
        </Navbar.Collapse>
      {/* </Container> */}
      </div>
    </Navbar>
  );
}

export default Navbar_frontpage;