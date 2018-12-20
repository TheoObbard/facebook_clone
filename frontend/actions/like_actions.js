import * as LikesApiUtil from '../util/likes_api_util';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';

export const addLike = (user_id, object_type, object_id) => dispatch => {
  return LikesApiUtil.addLike(user_id, object_type, object_id).then(
    (like) => dispatch(receiveLike(like))
  )
};

export const removeLike = (user_id, like_id) => dispatch => {
  return LikesApiUtil.removeLike(user_id, like_id).then(
    (like) => dispatch(deleteLike(like))
  )
};

export const fetchPostLikes = (post_id) => dispatch => {
  return LikesApiUtil.fetchPostLikes(post_id).then(
    (likes) => dispatch(receiveLikes(likes))
  )
};

export const fetchCommentLikes = (Comment_id) => dispatch => {
  return LikesApiUtil.fetchCommentLikes(Comment_id).then(
    (likes) => dispatch(receiveLikes(likes))
  )
};

export const receiveLike = (payload) => {
  return {
    type: RECEIVE_LIKE,
    payload
  }
};

export const receiveLikes = (payload) => {
  return {
    type: RECEIVE_LIKES,
    payload
  }
};

export const deleteLike = (payload) => {
  return {
    type: REMOVE_LIKE,
    payload
  }
};