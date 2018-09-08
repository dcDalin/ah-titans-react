import React from 'react';
import SnackBar from 'react-material-snackbar';
import { connect, } from 'react-redux';
import Loader from '../../Loader/components';
import './index.scss';

const Home = (props) => {
  const { new_user, } = props.home;

  return (
    <div className="app">
      <Loader />
      {new_user ? (
        <SnackBar show timer={6000} className="home">
          You have successfully signed up to Authors Haven!! Please check your email to verify your
          account
        </SnackBar>
      ) : (
        ''
      )}

      <h1>Welcome to Authors Haven!</h1>
    </div>
  );
};

const mapStatetoProps = state => ({
  home: state.exampleReducer,
  login: state.login,
});
export default connect(mapStatetoProps)(Home);
