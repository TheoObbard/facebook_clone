import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';

const postReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  var newState;
  switch (action.type) {
    case RECEIVE_POST:
      newState = Object.assign({}, oldState, action.payload.posts);
      return newState;
    case RECEIVE_POSTS:
      return action.payload.posts || {};
    default:
      return oldState;
  }
}

export default postReducer;