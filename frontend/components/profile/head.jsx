import React from 'react';
import Info from './info';
import NotFound from '../404';

class Head extends React.Component {
  constructor(props) {
    super(props)
    this.handleCoverUpload = this.handleCoverUpload.bind(this);
  }

  componentDidMount () {
    this.props.fetchUser(this.props.userId)
  };

  componentDidUpdate(oldProps) {
    if (this.props.match.params.userId !== oldProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  };

  displayFriendRequestButton () {
    for (let key in this.props.friendRequests) {
      if (this.props.friendRequests[key].requestee_id === this.props.user.id && this.props.friendRequests[key].requester_id === this.props.currentUser) {
        return (<div className='main_friend_button'>
                  <div className='friend_head_icon'></div>
                  <p>Friend Request Sent</p>
                </div>)
      }
    }

    for (let key in this.props.friendships) {
      if (this.props.friendships[key].user_one_id === this.props.currentUser || this.props.friendships[key].user_two_id === this.props.currentUser) {
        return (<div className='main_friend_button'>
                  <div className='friend_check_icon'></div>
                  <p>Friends</p>
                </div>)
      }
    }

    return (
      <div className='main_friend_button' onClick={() => this.props.addReq({ requester_id: this.props.currentUser, requestee_id: this.props.user.id })}>
        <div className='friend_head_icon'></div>
        <p>Add Friend</p>
      </div>
    )
  }

  handleCoverUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0]
    reader.readAsDataURL(file)
    const formData = new FormData();
    formData.append('user[cover_photo]', file);
    this.props.updateCoverPhoto(this.props.currentUser, formData);
  };

  handleProfileUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0]
    reader.readAsDataURL(file)
    const formData = new FormData();
    formData.append('user[profile_picture]', file);
    this.props.updateProfilePicture(this.props.currentUser, formData);
  };

  render () {
    if (this.props.user === undefined) {
      return null;
    }
    let cover_prof;

    if (this.props.user.id === this.props.currentUser) {
      cover_prof = (
        <div className='cover_photo'>
          <img className='cover_photo_pers' 
               src={this.props.user.coverPhotoUrl}
          />
          <input type='file'
                 id='upload_cover_photo'
                 className='file_picker'
                 accept='image/png, image/jpeg'
                 onChange={(e) => this.handleCoverUpload(e)}
          />
          <div onClick={() => document.getElementById('upload_cover_photo').click()} 
               className='cover_photo_hover'>
            <div className='update_cov'>Update Cover Photo</div>
          </div>
          <h1 className='current_user_name'>{this.props.user.name}</h1>
          <div className='current_user_profile_pic_border'>
              <img src={this.props.user.profilePicUrl} className='profile_pic' />
              <input type='file'
                     id='upload_prof_pic' 
                     className='file_picker' 
                     accept='image/png, image/jpeg'
                     onChange={(e) => this.handleProfileUpload(e)}
              />
            <div onClick={() => document.getElementById('upload_prof_pic').click()} 
              className='hover_profile_pic'>
              <div className='update_pro'>
                Update Profile Picture
              </div>
            </div>
          </div>
        </div>
    )} else {
      cover_prof = (
        <div className='cover_photo'>
          {this.displayFriendRequestButton()}
          <h1 className='user_name'>{this.props.user.name}</h1>
          <div className='profile_pic_border'>
            <div>
              <img src={this.props.user.profilePicUrl} className='profile_pic'></img>
            </div>
          </div>
        </div>
      )  
    }

    if (this.props.user === undefined) {
      return (<NotFound />)
    }

    return (
      <div className='page'>
        {cover_prof}
        <ul className='profile_nav'>
          <li className='profile_nav_button'>Timeline</li>
          <li className='profile_nav_button'>Friends</li>
          <li className='profile_nav_button'>Photos</li>
        </ul>

        <Info user={this.props.user} 
              fetchFriends={this.props.fetchFriends}
              currentUserId={this.props.currentUser}
              friendships={this.props.friendships}
              users={this.props.users}
              fetchUser={this.props.fetchUser}
              params={this.props.params}
        />
      </div>
    )
  };
}

export default Head;