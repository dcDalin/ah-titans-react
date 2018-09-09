import React from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import LoginForm from '../components';

class LoginContainer extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
  };

  onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  onValidate = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
  };

  validate = data => {
    const errors = {};
    if (!data.email) {
      errors.email = 'Email is required.';
    } else if (!Validator.isEmail(data.email)) {
      errors.email = 'Email is invalid.';
    }
    if (!data.password) {
      errors.password = 'Password is required.';
    }
    return errors;
  };

  render() {
    return (
      <LoginForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onValidate={this.onValidate}
        data={this.state.data}
        errors={this.state.errors}
      />
    );
  }
}

LoginContainer.propTypes = { submit: PropTypes.func.isRequired };

export default LoginContainer;
