import * as FriendApiUtil from '../util/friends_api_util';
export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

export const addReq = (request) => dispatch => {
  return FriendApiUtil.createReq(request).then(
    (friendRequests) => dispatch(receiveRequests(friendRequests))
  )
};

export const getFriendRequests = (id) => dispatch => {
  return FriendApiUtil.getSpecificRequests(id).then(
    (friendRequests) => 
      { return new Promise((resolve, reject) => {
        dispatch(receiveRequests(friendRequests));
        resolve();
      })
    }
  )
};

export const fetchFriends = (id) => dispatch => {
  return FriendApiUtil.fetchFriends(id).then(
    (friends) => 
      { return new Promise((resolve, reject) => {
        dispatch(receiveFriends(friends));
        resolve();
      })
    }
  )
};

export const removeReq = (request) => dispatch => {
  return FriendApiUtil.deleteReq(request.id).then(
    (friendRequests) => dispatch(receiveRequests(friendRequests))
  )
};

export const addFriend = (friend) => dispatch => {
  return FriendApiUtil.createFriend(friend).then(
    (friends) => dispatch(receiveFriends(friends))
  )
};

export const receiveRequests = (payload) => {
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