import React from 'react';
import Signup from './user/signup_container';
import NavBar from './nav_bar/nav_bar_container';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import NewsFeed from './news_feed/news_feed_container';
import Head from './profile/head_container';
import NotFound from './404';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app_container'>
      <NavBar />
      <Switch>
        <AuthRoute exact path='/signup' component={Signup} />
        <ProtectedRoute exact path='/' component={NewsFeed}/>
        <ProtectedRoute exact path='/user/:userId' component={Head} />
        <AuthRoute exact path='/' component={Signup} />
        <Route path='/404' component={NotFound} />

        <Redirect to='/'/>

      </Switch>
    </div> 
  )
};

export default App;