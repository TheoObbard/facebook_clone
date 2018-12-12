import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore(preloadedState);

  //testing only
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //delete these later ^

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: { currentUser: window.currentUser }
    };
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
});