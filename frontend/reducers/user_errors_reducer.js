import { RECEIVE_USER_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const userErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return []
    default:
      return oldState;
  }
};

export default userErrorsReducer;