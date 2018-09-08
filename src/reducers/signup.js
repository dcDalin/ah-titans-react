import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST, } from '../actions/types';

const prevState = {
  item: {},
  error: {},
  isFetching: false,
};
const signupReducer = (state = prevState, action) => {
  switch (action.type) {
  case SIGNUP_REQUEST:
    return { ...state, isFetching: true, };
  case CREATE_USER:
    return {
      ...state,
      isFetching: false,
      item: action.payload.user,
    };
  case CREATE_USER_ERROR:
    return { ...state, error: action.payload.errors, isFetching: false, };
  default:
    return state;
  }
};

export default signupReducer;
