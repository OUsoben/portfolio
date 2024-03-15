import '../styles/NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar expand="lg" className='  justify-content-between sticky-fixed nav-style sticky-top bg-white'> 
         
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="ms-3">
        <Navbar.Brand 
        style={{whiteSpace: "pre"}}
         variant="h1"
          gutterBottom
          className='ms-2 me-4 col-md -2 col-sm-3 col-8  font-name ' href="/"><span className='text-danger fs-2'>S</span>oben.</Navbar.Brand>
  </div>
        <Navbar.Collapse id="basic-navbar-nav " color='white'>
          <Nav className=" p-2  ms-auto me-5 nav-text ">
            <NavLink className={"nav-link fw-bold me-4 Nav_Link"}  to={"/"}>Home</NavLink>
            <NavLink className={"nav-link fw-bold me-4 Nav_Link"}  to={"aboutme"}>About</NavLink>
            <NavLink className={"nav-link fw-bold me-3 Nav_Link"}  to={"/portfolio"}>Portfoilo</NavLink>
            <NavLink to={"/contactme"}></NavLink>
            <NavLink to={"/skills"}></NavLink>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

export default MyNavbar;