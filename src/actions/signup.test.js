import createUser, {
  createUserActionCreator,
  signingUp,
  createUserErrorActionCreator,
} from './signup';

import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST } from './types';

const expectedAction = (type, data) => {
  return {
    type: type,
    payload: data,
  };
};

describe('create actions', () => {
  const data = {
    username: '',
    email: '',
    password: '',
  };

  it('should create an action signingUp', () => {
    const expectedAction = {
      type: SIGNUP_REQUEST,
    };
    expect(signingUp()).toEqual(expectedAction);
  });

  it('should create an action create user', () => {
    expect(createUserActionCreator(data)).toEqual(
      expectedAction(CREATE_USER, data),
    );
  });

  it('should create an action create user error', () => {
    expect(createUserErrorActionCreator(data)).toEqual(
      expectedAction(CREATE_USER_ERROR, data),
    );
  });
});

describe('create user', () => {
  it('should signup a user', () => {
    const user = {
      user: {
        email: 'johnmusiu@gmail.com',
        username: 'john',
        password: 'johntests',
      },
    };

    fetch.mockResponseOnce(JSON.stringify(user));
    fetch('https://ah-jn-api.herokuapp.com/api/users/', {
      method: 'POST',
      body: JSON.stringify({ user: { username: 'Musiu' } }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      expect(res.body).toEqual(JSON.parse(user));
    });
  });
});
