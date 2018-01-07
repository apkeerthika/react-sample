import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './App.css';
import './Login.js';


  function handleClick() {
    alert('You clicked Programming Language'); 
  }

class App extends Component {
  
  render() {
    return (
        <div>
           <AppBar position="static">
              <Toolbar>
                <IconButton className="menuButton" color="contrast" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" className="flex">
                  Title
                </Typography>
                <Button color="contrast">Login</Button>
              </Toolbar>
            </AppBar>
            <Chip
              avatar={<Avatar>PL</Avatar>}
              label="C#"
              onClick={handleClick}
              className="chip"
            />
            <Chip
              avatar={<Avatar>PL</Avatar>}
              label="C++"
              onClick={handleClick}
              className="chip"
            />
            <Chip
              avatar={<Avatar>PL</Avatar>}
              label="JAVA"
              onClick={handleClick}
              className="chip"
            />
            <Chip
              avatar={<Avatar>PL</Avatar>}
              label="J2EE"
              onClick={handleClick}
              className="chip"
            />
            <Chip
              avatar={<Avatar>PL</Avatar>}
              label="RUBY"
              onClick={handleClick}
              className="chip"
            />
            <Chip
              avatar={<Avatar>PL</Avatar>}
              label="PHP"
              onClick={handleClick}
              className="chip"
            />
            <Chip
              avatar={<Avatar>PL</Avatar>}
              label="REACT"
              onClick={handleClick}
              className="chip"
            />
            <Chip
              avatar={<Avatar>PL</Avatar>}
              label="PYTHON"
              onClick={handleClick}
              className="chip"
            />
        </div>
    );
  }
}

export default App;
