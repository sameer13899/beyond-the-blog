import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import memoriesLogo from '../../images/memories-Logo.png';
import memoriesText from '../../images/memories-Text.png';
import { LOGOUT } from '../../constants/actionTypes';

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push('/');
    setUser(null);
  };
  useEffect(() => {
    const token = user?.tokenId;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img src={memoriesText} alt="icon" height="45px" />
        <img
          className={classes.image}
          src={memoriesLogo}
          alt="icon"
          height="40px"
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              LOGOUT
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            SIGN IN
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
