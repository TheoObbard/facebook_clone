import React from 'react';
import Info from './info';

class Head extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchUser(this.props.userId)
  };

  render () {
    return (
      <div className='page'>
        <div className='cover_photo'>
          <h1 className='user_name'>{this.props.user.name}</h1>
          <div className='profile_pic_border'>
            <div className='profile_pic'></div>
          </div>
        </div>
        <ul>
          <li>Timeline</li>
          <li>Friends</li>
          <li>Photos</li>
        </ul>

        {/* <Info user={this.props.user} /> */}
      </div>
    )
  };
}

export default Head;