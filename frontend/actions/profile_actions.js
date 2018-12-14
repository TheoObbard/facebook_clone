export const RECIEVE_USER = 'RECIEVE_USER';
import * as UserApiUtil from '../util/user_api_util';

export const fetchUser = (id) => dispatch => {
  return UserApiUtil.fetchUser(id).then(
    (user) => dispatch(recieveUser(user))
  )
};

export const updateCoverPhoto = (id, formData) => dispatch => {
  return UserApiUtil.updateCoverPhoto(id, formData).then(
    (user) => dispatch(recieveUser(user))
  )
};

export const recieveUser = (user) => {
  return {
    type: RECIEVE_USER, 
    user
  }
};
