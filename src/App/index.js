import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function App(props) {
  const { classes, } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={24}
        justify="center"
        alignItems="center"
      >

        <Grid container xs={8}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>App Bar</Paper>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>Body</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Side nav</Paper>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Footer</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
