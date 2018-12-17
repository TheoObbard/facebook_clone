import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

const commentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  var newState;
  switch (action.type) {
    case RECEIVE_COMMENT:
      newState = Object.assign({}, oldState, action.payload.comments);
      return newState;
    case RECEIVE_COMMENTS:
      newState = Object.assign({}, oldState, action.payload.comments);
      return newState;
    default:
      return oldState;
  }
}

export default commentReducer;