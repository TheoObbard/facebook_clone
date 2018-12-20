import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendRequestsReducer from './friend_requests_reducer';
import friendshipsReducer from './friendships_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer, 
  friendRequests: friendRequestsReducer, 
  friendships: friendshipsReducer, 
  posts: postsReducer, 
  comments: commentsReducer, 
  likes: likesReducer
});

export default entitiesReducer;