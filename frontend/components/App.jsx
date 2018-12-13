import React from 'react';
import Signup from './user/signup_container';
import NavBar from './nav_bar/nav_bar_container';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import NewsFeed from './news_feed/news_feed';
import Head from './profile/head_container';

const App = () => {
  return (
    <div className='app_container'>
      <NavBar />
      <Switch>
        <AuthRoute exact path='/signup' component={Signup} />
        <ProtectedRoute exact path='/user/:userId' component={Head} />
        {/* Route exact path='/404' component={error or something} */}
        <AuthRoute exact path='/' component={Signup} />
        <Redirect to='/'/>
      </Switch>
    </div>
  )
};

export default App;