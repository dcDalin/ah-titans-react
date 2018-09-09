import React from 'react';
import LoginContainer from './containers';

class Login extends React.Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return <LoginContainer submit={this.submit} />;
  }
}

export default Login;
