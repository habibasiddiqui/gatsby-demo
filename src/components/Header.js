import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {


  return (
    <div >
      {/* <AppBar position="static" className='navbar'>
        <Toolbar>
          <Typography className='nav-brand' variant="h6">
            EXTO
          </Typography>
          <span className='nav-link-span'>
              <Button className='nav-link' >Home</Button>
              <Button className='nav-link' color="inherit">Portfolio</Button>
              <Button className='nav-link' color="inherit">Style</Button>
              <Button className='nav-link' color="inherit">Blog Guide</Button>
              <Button className='nav-link' color="inherit">About</Button>
              <Button className='nav-link' color="inherit">Contact</Button>
          </span>
          
        </Toolbar>
      </AppBar> */}


      <Navbar className='navbar' expand="lg">
        <Navbar.Brand className='nav-brand' >EXTO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='nav-link' href="#">Home</Nav.Link>
            <Nav.Link className='nav-link' href="#">Portfolio</Nav.Link>
            <Nav.Link className='nav-link' href="#">Style</Nav.Link>
            <Nav.Link className='nav-link' href="#">Blog</Nav.Link>
            <Nav.Link className='nav-link' href="#">About</Nav.Link>
            <Nav.Link className='nav-link' href="#">Contact</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>






    </div>
  );
}