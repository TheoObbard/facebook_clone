import { RECEIVE_SEARCH_QUERIES } from '../actions/search_actions';

const uiReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_QUERIES:
      return action.payload; // very possible this needs updating
    default:
      return oldState;
  }
};

export default uiReducer;