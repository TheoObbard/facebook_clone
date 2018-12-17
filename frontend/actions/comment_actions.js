import * as CommentsApiUtil from '../util/comments_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const addComment = (comment, postId) => dispatch => {
  return CommentsApiUtil.addComment(comment, postId).then(
    (comment) => dispatch(receiveComment(comment))
  )
};

export const receiveComment = (payload) => {
  return {
    type: RECEIVE_COMMENT, 
    payload
  }
};

export const fetchComments = (postId) => dispatch => {
  return CommentsApiUtil.fetchComments(postId).then(
    (payload) => 
      {return new Promise((resolve, reject) => {
        dispatch(receiveComments(payload));
        resolve(payload.comments);
      })
    }
  )
};

export const receiveComments = (payload) => {
  return {
    type: RECEIVE_COMMENTS,
    payload
  }
};