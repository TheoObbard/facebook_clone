import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../session/login_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.currentUser);
    
    const nav = (this.props.currentUser === undefined) ? (
      <div className='loggedout_menubar_container'>
        <div className='facebook_logo'></div>
        <Login />
      </div>
    ) : (
      <div className='nav'>
        <Link
          to='/'
          className='fb_logo_small'
        />
        <div className='current_user_page_button'>
          <img className='current_user_button_image' 
               src={this.props.currentUser.profilePicUrl}
          />
          <Link
            className='current_user_button_link'
            to={`/user/${this.props.currentUser.id}`} 
          >{this.props.currentUser.name}
          </Link>
        </div>
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