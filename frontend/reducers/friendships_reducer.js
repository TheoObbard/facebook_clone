import { RECEIVE_FRIENDS } from '../actions/friend_actions';
import { LOCATION_CHANGE } from 'react-router-redux';

const friendshipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  var newState;
  switch (action.type) {
    case RECEIVE_FRIENDS:
      newState = Object.assign({}, action.payload.friendships);
      return newState;
    case LOCATION_CHANGE: 
      return {};
    default:
      return oldState;
  }
}

export default friendshipsReducer;