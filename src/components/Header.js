import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import '../App.css'

export default function Header() {


  return (
    <div >
      <AppBar position="static" className='navbar'>
        <Toolbar>
          {/* <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
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
      </AppBar>
    </div>
  );
}