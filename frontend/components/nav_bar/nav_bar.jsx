import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../user/login_container';
// import facebook_logo from '../../../app/assets/images/facebook_logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUser: this.props.currentUser }
  }

  render() {
    const nav = this.props.currentUser ? (
      <div className='nav'>
        {/* <button onClick={logout}>Log Out</button> */}
        <h1>Someone is signed in!</h1>
        <button onClick={this.props.logout}>Log out</button>
      </div>
    ) : (
      <div className='loggedout_menubar_container'>
        <div className='facebook_logo'></div>
        <Login />
      </div>
    )

    return (
      <header>
        <div>
          {nav}
        </div>
      </header>
    )
  }

}

export default NavBar;