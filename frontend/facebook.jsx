import React from 'react';
import ReactDOM from 'react-dom';
import { signup, signin, logout } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signin = signin
  window.signup = signup 
  window.logout = logout
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Facebook</h1>, root)
});

