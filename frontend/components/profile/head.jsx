import React from 'react';
import Info from './info';
import NotFound from '../404';

class Head extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchUser(this.props.userId)
  };

  componentDidUpdate(oldProps) {
    if (this.props.match.params.userId !== oldProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  };

  render () {
    if (this.props.user === undefined) {
      return null;
    }
    let cover_prof;

    if (this.props.user.id === this.props.currentUser) {
      cover_prof = (
        <div className='cover_photo'>
          <img src={this.props.user.coverPhotoUrl}/>
          <div className='cover_photo_hover'><div className='update_cov'>Update Cover Photo</div></div>
          <h1 className='current_user_name'>{this.props.user.name}</h1>
          <div className='current_user_profile_pic_border'>
              <img src={this.props.user.profilePicUrl} className='profile_pic' />
              <div className='hover_profile_pic'><div className='update_pro'>Update Profile Picture</div></div>
          </div>
        </div>
    )} else {
      cover_prof = (
        <div className='cover_photo'>
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

        <Info user={this.props.user} />
      </div>
    )
  };
}

export default Head;