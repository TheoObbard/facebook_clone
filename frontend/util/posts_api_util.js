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

export const fetchNewsfeedPosts = () => {
  return $.ajax({
    url: '/api/posts', 
    method: 'GET'
  })
}