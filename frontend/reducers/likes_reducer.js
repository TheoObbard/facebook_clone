import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions';

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  var newState;
  switch (action.type) {
    case RECEIVE_LIKE:
      newState = Object.assign({}, oldState, action.payload.likes);
      return newState;
    case RECEIVE_LIKES:
      return action.payload.likes;
    case REMOVE_LIKE:
      newState = Object.assign({}, oldState);
      delete newState[action.payload.likes.id]
      return newState;
    default:
      return oldState;
  }
}

export default likesReducer;