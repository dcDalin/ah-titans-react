import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, } from '../actions/types';

const initialState = {
  user: {},
  errors: {},
  isFetching: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      isFetching: false,
      user: action.payload.user,
    };
  case LOGIN_ERROR:
    return {
      ...state,
      isFetching: false,
      errors: action.payload.errors,
    };

  default:
    return state;
  }
}
