import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions';

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  var newState;
  switch (action.type) {
    case RECEIVE_LIKE:
      newState = Object.assign({}, oldState, action.payload.likes);
      return newState;
    case RECEIVE_LIKES:
      newState = Object.assign({}, oldState, action.payload.likes);
      return newState;
    case REMOVE_LIKE:
      newState = Object.assign({}, oldState);
      // debugger
      delete newState[Object.values(action.payload.likes)[0].id]
      return newState;
    default:
      return oldState;
  }
}

export default likesReducer;