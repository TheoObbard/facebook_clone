import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props) // just target user here
  }

  render() {
    if (this.props.user.id === undefined) {
      return (<h1></h1>)
    }
 
    var birthday;
    var job;
    var location;
    var relationship_stat;

    if (this.props.user.birthday) {
      birthday = (<li>Born on {this.props.user.birthday}</li>)
    }

    if (this.props.user.job) {
      job = (<li>{this.props.user.job} at {this.props.user.workplace}</li>)
    } 

    if (this.props.user.location) {
      location = (<li>Lives in {this.props.user.location}</li>)
    }

    if (this.props.user.relationship_stat) {
      relationship_stat = (<li>{this.props.user.relationship_stat}</li>)
    }

    return (
      <div>
        <div className='intro'>
          <div className='title'>
            <div className='intro_icon'></div>
            <h3>Intro</h3>
          </div>
          <ul>
            {birthday}
            {job}
            {location}
            {relationship_stat}
          </ul>
        </div>

        <div className='photos'>
          <div className='title'>
            <div className='photo_icon'></div>
            <h3>Photos</h3>
          </div>
        </div>

        <div className='friends'>
          <div className='title'>
            <div className='friends_icon'></div>
            <h3>Friends</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Info;