import React from 'react';
import Signup from './session/signup_container';
import NavBar from './nav_bar/nav_bar_container';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import NewsFeed from './news_feed/news_feed';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <AuthRoute path='/signup' component={Signup} />
        <ProtectedRoute exact path='/' component={NewsFeed} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
};

export default App;