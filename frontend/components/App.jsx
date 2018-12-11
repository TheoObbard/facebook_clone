import React from 'react';
import Signup from './session/signup_container';
import NavBar from './nav_bar/nav_bar_container';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Route exact path='/' component={Home}/> */}
      <Route path='/signup' component={Signup}/>
    </div>
  )
};

export default App;