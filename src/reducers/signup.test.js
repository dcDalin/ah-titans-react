import * as types from '../actions/types';
import reducer from '../reducers/signup';

describe('Signup has errors if required fields missing', () => {
  it('returns errors', () => {});
});

describe('signup reducer', () => {
  const user = {
    email: 'johnmusiu@gmail.com',
    username: 'john',
    password: 'johntests',
  };

  const initialState = {
    item: { user },
    error: {},
    isFetching: false,
  };

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should set isFetching state to true', () => {
    const startAction = {
      type: types.SIGNUP_REQUEST,
    };

    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  it('should return an error', () => {
    const startAction = {
      type: types.CREATE_USER_ERROR,
      payload: { errors: { username: 'some error' } },
    };

    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      error: { username: 'some error' },
    });
  });

  it('should return a user object', () => {
    const startAction = {
      type: types.CREATE_USER,
      payload: { user: { user } },
    };

    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
    });
  });
});
