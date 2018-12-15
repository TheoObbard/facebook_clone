import * as FriendApiUtil from '../util/friends_api_util';
export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

export const recieveReq = (request) => dispatch => {
  return FriendApiUtil.createReq(request).then(
    (friendRequests) => dispatch(recieveRequests(friendRequests))
  )
};

export const removeReq = (request) => dispatch => {
  return FriendApiUtil.deleteReq(request).then(
    (friendRequests) => dispatch(receiveRequests(friendRequests))
  )
};

export const addFriend = (friend) => dispatch => {
  return FriendApiUtil.createFriend(friend).then(
    (friends) => dispatch(receiveFriends(friends))
  )
};

export const recieveRequests = (payload) => {
  return {
    type: RECEIVE_FRIEND_REQUESTS,
    payload
  }
};

export const receiveFriends = (payload) => {
  return {
    type: RECEIVE_FRIENDS,
    payload
  }
};