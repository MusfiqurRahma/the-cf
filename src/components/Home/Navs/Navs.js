import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import logo from '../../../image/football-website-image/logo.png';
import './Navs.css';

const Navs = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                <Navbar.Brand href="#home">
                    <div className='logoText'>
                    <img src={logo} alt="" className='logoImg'/>
                    <h4>#CF</h4>
                   </div>
                </Navbar.Brand>
                 <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                 <Navbar.Text>
                 <Nav className="me-end" style={{marginRight:'74px',fontFamily:'poppins',fontSize:'18px'}}>
                  <Nav.Link href="#home" className='text-black'>Home</Nav.Link>
                  <Nav.Link href="#features" className='text-black'>Service</Nav.Link>
                  <Nav.Link href="#pricing" className='text-black'>Agency</Nav.Link>
                  <Nav.Link href="#pricing" className='text-black'>Player</Nav.Link>
                  <Nav.Link href="#pricing" className='text-black'>Contact Us</Nav.Link>
                </Nav>
               </Navbar.Text>
             </Navbar.Collapse>
         </Navbar>
    );
};

export default Navs;