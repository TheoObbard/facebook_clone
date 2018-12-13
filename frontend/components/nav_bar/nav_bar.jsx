import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../session/login_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUser: this.props.currentUser }
  }

  render() {
    const nav = this.props.currentUser ? (
      <div className='nav'>
        <Link 
          to='/' 
          className='fb_logo_small' 
        />
        <div className='dropdown'>
          <button className='dropbtn'>
            <div className='triangle'></div>
          </button>
          <div className='dropdown_content'>
            <div className='logout_button_container'>
              <Link
                className='logout_text'
                to='/'
                onClick={this.props.logout}
              >Log Out
            </Link> 
            </div>
          </div>
        </div>
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