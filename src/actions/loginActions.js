import PropTypes from 'prop-types';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, } from './types';

export const loginRequest = () => ({ type: LOGIN_REQUEST, });

export const loginUserSuccessful = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginUserError = data => ({
  type: LOGIN_ERROR,
  payload: data,
});


const handleResponse = response => response.json().then((data) => {
  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
});

const login = data => fetch('https://ah-titans-api.herokuapp.com/api/users/login/', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(res => handleResponse(res));

const loginUser = (userData, history) => (dispatch) => {
  dispatch(loginRequest());
  login(userData)
    .then((data) => {
      localStorage.setItem('token', data.user.token);
      localStorage.setItem('username', data.user.username);
      dispatch(
        loginUserSuccessful(data)
      );
      history.push('/');
    })
    .catch(error => dispatch(loginUserError(error)));
};

loginUser.propTypes = {
  loginUserSuccessful: PropTypes.func.isRequired,
  loginUserError: PropTypes.func.isRequired,
};

export default loginUser;
