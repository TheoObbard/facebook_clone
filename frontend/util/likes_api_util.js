export const addLike = (user_id, object_type, object_id) => {
  return $.ajax({
    url: `/api/users/${user_id}/likes`,
    method: 'POST',
    data: {
      likes: {
        object_id: object_id,
        object_type: object_type
      }
    }
  })
};

export const fetchPostLikes = (post_id) => {
  return $.ajax({
    url: `/api/posts/${post_id}/likes`,
    method: 'GET'
  })
};

export const fetchCommentLikes = (comment_id) => {
  return $.ajax({
    url: `/api/comments/${comment_id}/likes`,
    method: 'GET'
  })
};

export const removeLike = (user_id, like_id) => {
  return $.ajax({
    url: `/api/users/${user_id}/likes/${like_id}`,
    method: 'DELETE'
  })
};