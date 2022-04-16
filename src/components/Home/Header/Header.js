import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to='/'>
                <img className='img' height={40} alt="" />
                Developer</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"/>
            
                <Nav className=''>
                <Nav.Link  as={Link} to='/services'>Services</Nav.Link>
                <Nav.Link  as={Link} to='/blogs'>Blogs</Nav.Link>
                <Nav.Link  as={Link} to='/about'>About</Nav.Link>
                <Nav.Link  as={Link} to='/login'>Log In</Nav.Link>
                <Nav.Link  as={Link} to='/registration'>registration</Nav.Link>
                    

                    
                    
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
    );
};

export default Header;