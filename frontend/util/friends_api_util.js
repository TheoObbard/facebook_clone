export const createReq = (friend_request) => {
  return $.ajax({
    method: 'POST', 
    url: '/api/friend_requests', 
    data: { friend_request }
  })
};

export const deleteReq = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friend_requests/${id}`
  })
};

export const createFriend = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships', 
    data: { friendship }
  })
};

export const getSpecificRequests = (id) => {
  return $.ajax({
    method: 'GET', 
    url: `/api/users/${id}/friend_requests`
  })
};

export const fetchFriends = (id) => {
  return $.ajax({
    
  })
};