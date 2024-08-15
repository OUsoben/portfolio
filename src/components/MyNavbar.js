import { useState, useRef, useEffect } from 'react';
import '../styles/NavBar.css'; // Import your custom CSS file
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const toggleRef = useRef(null); // Create a ref for the toggle button

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleExternalTrigger = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      // Check if clicked outside the toggle button (if applicable)
      (!toggleRef.current || !toggleRef.current.contains(event.target))
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener on component mount
    document.addEventListener('click', handleExternalTrigger);

    return () => {
      // Remove event listener on component unmount
      document.removeEventListener('click', handleExternalTrigger);
    };
  }, []); // Empty dependency array ensures one-time execution

  return (
    <Navbar expand="lg" className='justify-content-between sticky-fixed nav-style sticky-top bg-white' ref={navbarRef}>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleCollapse}
        ref={toggleRef} // Assign ref to the toggle button
      />
      <div className="ms-3">
        <Navbar.Brand
          style={{ whiteSpace: "pre" }}
          variant="h1"
          gutterBottom
          className='ms-2 me-4 col-md-2 col-sm-3 col-8 font-name'
          href="/"
        >
          <span className='text-danger fs-2'>S</span>oben.
        </Navbar.Brand>
      </div>
      <Navbar.Collapse id="basic-navbar-nav navbarBtn" color='white' in={isOpen}>
        <Nav className=" p-2 ms-auto me-5 nav-text ">
          <NavLink className={"nav-link fw-bold me-4 Nav_Link"} to={"/"} onClick={handleCollapse}>
            Home
          </NavLink>
          <NavLink className={"nav-link fw-bold me-4 Nav_Link"} to={"aboutme"} onClick={handleCollapse}>
            About
          </NavLink>
          <NavLink className={"nav-link fw-bold me-3 Nav_Link"} to={"/portfolio"} onClick={handleCollapse}>
            Portfolio
          </NavLink>
          <NavLink to={"/contactme"}></NavLink>
          <NavLink to={"/skills"}></NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
