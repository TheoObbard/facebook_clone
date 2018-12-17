export const addComment = (comment, postId) => {
  return $.ajax({
    url: `/api/posts/${postId}/comments`, 
    method: 'POST', 
    data: { comment }
  })
};

export const fetchComments = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}/comments`,
    method: 'GET'
  })
};