import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST } from './types';

export const signingUp = () => ({ type: SIGNUP_REQUEST });

export const createUserActionCreator = data => ({
  type: CREATE_USER,
  payload: data,
});

export const createUserErrorActionCreator = error => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

const handleResponse = response =>
  response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return Promise.reject(data);
    }
    return data;
  });

const signup = data =>
  fetch('https://ah-titans-api.herokuapp.com/api/users/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleResponse);

const createUser = (userData, history) => dispatch => {
  dispatch(signingUp());
  signup(userData)
    .then(data => {
      dispatch(createUserActionCreator(data));
      localStorage.setItem('user', data);
      history.push('/');
    })
    .catch(error => dispatch(createUserErrorActionCreator(error)));
};

export default createUser;
