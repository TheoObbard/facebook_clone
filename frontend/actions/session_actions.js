import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const login = (user) => dispatch => {
  return SessionApiUtil.signin(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)), 
    (errors) => dispatch(receiveUserErrors(errors.responseJSON))
  )
};

export const signup = (user) => dispatch => {
  return SessionApiUtil.signup(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)), 
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  )
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    () => dispatch(logoutCurrentUser())
  )
};

export const receiveCurrentUser = (payload) => {
  return {
    type: RECEIVE_CURRENT_USER, 
    payload: { payload }
  }
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  }
};