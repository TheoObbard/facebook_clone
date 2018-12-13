import React from 'react';
import Info from './info';

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
    return (
      <div className='page'>
        <div className='cover_photo'>
          <h1 className='user_name'>{this.props.user.name}</h1>
          <div className='profile_pic_border'>
            <div className='profile_pic'>
              <div className='hover_profile_pic'></div>
            </div>
          </div>
        </div>
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