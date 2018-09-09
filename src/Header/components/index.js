import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, } from '@material-ui/core/styles';
import { Link, } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: 20,
  },
};

function Header(props) {
  const { classes, } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="title" color="inherit" component={Link} to="/" className={classes.grow}>
            Home
          </Typography>
          <Button color="inherit" variant="outlined" className={classes.button} component={Link} to="/login">Login</Button>
          <Button color="inherit" variant="outlined" component={Link} to="/login">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
