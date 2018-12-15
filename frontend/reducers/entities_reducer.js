import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendRequestsReducer from './friend_requests_reducer';
import friendshipsReducer from './friendships_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer, 
  friendRequests: friendRequestsReducer, 
  friendships: friendshipsReducer
});

export default entitiesReducer;