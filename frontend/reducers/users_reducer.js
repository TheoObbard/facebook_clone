import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECIEVE_USER } from '../actions/profile_actions';
import { RECEIVE_FRIENDS } from '../actions/friend_actions';



const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  var newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, oldState, action.payload.user);
      return newState;
    case RECIEVE_USER:
      newState = Object.assign({}, oldState, action.payload.user);
      return newState;
    case RECEIVE_FRIENDS:
      newState = Object.assign({}, oldState, action.payload.friends);
      return newState;
    default:
      return oldState;
  }
}

export default usersReducer;