import { CREATE_USER, } from '../actions/types';

function homeReducer(
  state = {
    new_user: false,
  },
  action = {}
) {
  switch (action.type) {
  case CREATE_USER:
    return { ...state, new_user: true, };
  default:
    return state;
  }
}

export default homeReducer;
