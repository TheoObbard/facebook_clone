import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../session/login_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  componentDidMount () {
    if (this.props.currentUser) {
      this.props.getFriendRequests(this.props.currentUser.id).then(
        () => {
          for (var key in this.props.friendRequests) {
            if (this.props.currentUser.id === this.props.friendRequests[key].requestee_id) {
              this.props.fetchUser(this.props.friendRequests[key].requester_id)
            }
          }
        }
      )
    }
  }

  logout_button () {
    return (
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
    )
  };

  handleConfirm(id) {
    this.props.addFriend({
      user_one_id: this.props.currentUser.id,
      user_two_id: id
    }).then(
      () => this.props.getFriendRequests(this.props.currentUser.id)
    )
  }

  getPendingRequests() {
    const pending_requests = [];
    if (this.props.friendRequests !== undefined) {
      for (let key in this.props.friendRequests) {
        if (this.props.currentUser.id === this.props.friendRequests[key].requestee_id) {
          if (this.props.users[this.props.friendRequests[key].requester_id]) {
            pending_requests.push(
              <li className='list_item_for_req'>
                <img className='requester_img' src={this.props.users[this.props.friendRequests[key].requester_id].profilePicUrl} alt="requester_pic"/>
                <Link className='friend_req_name' to={`/user/${this.props.friendRequests[key].requester_id}`}>
                  {this.props.users[this.props.friendRequests[key].requester_id].name}
                </Link>
                <button className='confirm' onClick={() => this.handleConfirm(this.props.users[this.props.friendRequests[key].requester_id].id)}>
                  Confirm
                </button>
                  <button className='delete_request' onClick={() => this.props.removeReq(this.props.friendRequests[key])}>
                    Delete Request
                </button>
              </li>
            )
          }
        }
      }
    }
    return pending_requests.map(request => request)
  };

  pending_friends_button() {
    return (
      <div className='friend_dropdown'>
        <button className='dropbtn'>
          <i className="fas fa-user-friends friend_logo"></i>
        </button>
        <div className='friend_dropdown_content'>
          <div className='friend_button_container'>
            <p>Friend Requests</p>
            <div className='friend_text'>{this.getPendingRequests()}</div>
          </div>
        </div>
      </div>
    )
  }

  render() {    
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
        {this.pending_friends_button()}
        {this.logout_button()}
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