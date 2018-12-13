import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECIEVE_USER } from '../actions/profile_actions';


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  var newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
      return newState;
    case RECIEVE_USER:
      newState = Object.assign({}, oldState, { [action.user.id]: action.user });
      return newState;
    default:
      return oldState;
  }
}

export default usersReducer;