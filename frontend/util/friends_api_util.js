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

export const createFriend = (friend) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships', 
    data: { friend }
  })
};