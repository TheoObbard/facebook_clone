import { RECEIVE_FRIEND_REQUESTS } from '../actions/friend_actions';

const friendRequestsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  var newState;
  switch (action.type) {
    case RECEIVE_FRIEND_REQUESTS:
      newState = Object.assign({}, oldState, action.payload.friendRequests);
      return newState;
    default:
      return oldState;
  }
}

export default friendRequestsReducer;