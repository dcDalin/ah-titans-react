import {
  loginUserSuccessful,
  loginUserError,
  loginRequest,
} from '../loginActions';
import * as types from '../types';

describe('login actions', () => {
  it('should create an action loginRequest', () => {
    const expectedAction = {
      type: types.LOGIN_REQUEST,
    };
    expect(loginRequest()).toEqual(expectedAction);
  });
  it('should create an action create login Success', () => {
    const data = {
      username: '',
      email: '',
    };
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      payload: data,
    };
    expect(loginUserSuccessful(data)).toEqual(expectedAction);
  });
  it('should create an action login error', () => {
    const error = {
      email: '',
      password: '',
    };
    const expectedAction = {
      type: types.LOGIN_ERROR,
      payload: error,
    };
    expect(loginUserError(error)).toEqual(expectedAction);
  });
});
describe('login user', () => {
  it('should login a user', () => {
    const user = {
      user: {
        email: 'manu@gmail.com',
        password: 'manerayle',
      },
    };
    fetch.mockResponseOnce(JSON.stringify(user));
    fetch('https://ah-jn-api.herokuapp.com/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user: { email: 'manu@gmail.com', }, }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      expect(res.body).toEqual(JSON.parse(user));
    });
  });
});
