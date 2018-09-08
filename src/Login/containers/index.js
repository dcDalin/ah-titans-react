import React from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import loginUser from '../../actions/loginActions';
import LoginForm from '../components';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
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

    const { email, password, } = this.state;

    const user = {
      user: {
        email,
        password,
      },
    };

    this.props.loginUser(user, this.props.history);
  }

  render() {
    const { login, } = this.props;
    const { errors, isFetching, } = login;
    return (
      <LoginForm
        onChange={this.handleChange}
        onClick={this.handleSubmit}
        errors={errors}
        isFetching={isFetching}
      />
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  login: PropTypes.shape({
    user: PropTypes.object,
    errors: PropTypes.object,
    isFetching: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = ({ login, }) => ({
  login,
});

export default connect(mapStateToProps, { loginUser, })(Login);
