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
    let cover_prof;

    if (this.props.user.id === this.props.currentUser.id) {
      cover_prof = (
        <div className='cover_photo'>
          <div className='cover_photo_hover'><div className='update_cov'>Update Cover Photo</div></div>
          <h1 className='user_name'>{this.props.user.name}</h1>
          <div className='profile_pic_border'>
            <div className='profile_pic'>
              <div className='hover_profile_pic'><div className='update_pro'>Update Profile Picture</div></div>
            </div>
          </div>
        </div>
    )} else {
      cover_prof = (
        <div className='cover_photo'>
          <h1 className='user_name'>{this.props.user.name}</h1>
          <div className='profile_pic_border'>
            <div className='profile_pic'>
            </div>
          </div>
        </div>
      )  
    }

    if (this.props.currentUser.id === undefined) {
      return null;
    }

    if (this.props.user.name === undefined) {
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