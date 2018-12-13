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
        <AuthRoute path='/signup' component={Signup} />
        <ProtectedRoute exact path='/user/:userId' component={Head} />
        <AuthRoute path='/' component={Head} />
        <Redirect to='/' component={Head}/>
      </Switch>
    </div>
  )
};

export default App;

// { `/user/${props.store.session.id}` }