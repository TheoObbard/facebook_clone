export const addPost = (post, userId) => {
  return $.ajax ({
    url: `/api/users/${userId}/posts`, 
    method: 'POST', 
    data: { post }
  })
};

export const fetchPosts = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/posts`,
    method: 'GET'
  })
};