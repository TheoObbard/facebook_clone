import React from 'react';
import Signup from './session/signup_container';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Facebook</h1>
      {/* <Route exact path='/' component={Home}/> */}
      <Route path='/signup' component={Signup}/>
    </div>
  )
};

export default App;