import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import createUser from '../../actions/signup';
import SignupForm from '../components/SignupForm';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup.user ? this.props.history.push('/login') : <div>Success</div>;
    this.props.createUser({ user: this.state, }, this.props.history);
  }

  render() {
    const { error, isFetching, } = this.props.signup;
    const items = Object.keys(this.props.signup.item).length;
    const successMessage = 'You have successfully signed up to Authors Haven!! Please check your email to verify your account';

    return (
      <div>
        <SignupForm
          onChange={this.handleChange}
          onClick={this.handleSubmit}
          error={error}
          isFetching={isFetching}
          successMessage={successMessage}
          items={items}
        />
      </div>
    );
  }
}
Signup.propTypes = {
  createUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ signup, }) => ({
  signup,
});

export default connect(
  mapStateToProps,
  { createUser, }
)(Signup);
