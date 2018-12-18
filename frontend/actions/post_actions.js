import * as PostsApiUtil from '../util/posts_api_util';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const addPost = (post, userId) => dispatch => {
  return PostsApiUtil.addPost(post, userId).then(
    (post) => dispatch(receivePost(post))
  )
};

export const receivePost = (payload) => {
  return {
    type: RECEIVE_POST,
    payload
  }
};

export const fetchPosts = (userId) => dispatch => {
  return PostsApiUtil.fetchPosts(userId).then(
    (payload) =>
      { return new Promise((resolve, reject) => {
        dispatch(receivePosts(payload));
        resolve(payload.posts)
      })
    }
  )
};

export const fetchNewsfeedPosts = () => dispatch => {
  return PostsApiUtil.fetchNewsfeedPosts().then(
    (payload) => {
      return new Promise((resolve, reject) => {
        dispatch(receivePosts(payload));
        resolve(payload.posts)
      })
    }
  )
};

export const receivePosts = (payload) => {
  return {
    type: RECEIVE_POSTS,
    payload
  }
};