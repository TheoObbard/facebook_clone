import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props)
  }

  displayFriends () {
    // calls fetch friends 
    // loops over 9 of them and returns their pic/name
  }

  render() {
    if (this.props.user.id === undefined) {
      return (<h1></h1>)
    }
 
    let birthday;
    let job;
    let location;
    let relationship_stat;

    if (this.props.user.birthday) {
      let newDate = new Date(this.props.user.birthday)
     
      birthday = (
        <div className='user_info_item'>
          <div className='birthday_icon'></div>
          <li>Born on {newDate.getMonth()}/{newDate.getDate()}/{newDate.getFullYear()}</li>
        </div>
      )
    }

    if (this.props.user.job) {
      job = (
        <div className='user_info_item'>
          <div className='job_icon'></div>
          <li>{this.props.user.job}</li>
        </div>
      )
    } 

    if (this.props.user.location) {
      location = (
        <div className='user_info_item'>
        <div className='location_icon'></div>
        <li>Lives in {this.props.user.location}</li>
      </div>
      )
    }

    if (this.props.user.relationship_stat) {
      relationship_stat = (
      <div className='user_info_item'>
        <div className='relationship_icon'></div>
        <li>{this.props.user.relationship_stat}</li>
      </div>
      )
    }

    return (
      <div>
        <div className='intro'>
          <div className='title'>
            <div className='intro_icon'></div>
            <h3>Intro</h3>
          </div>
          <ul className='custom_info'>
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
            {this.displayFriends}
          </div>
        </div>

        <div className='answers'>
          <div className='title'>
            <div className='answers_icon'></div>
            <h3>Did You Know <span className='answer_link'>Add Answer</span></h3>
          </div>
        </div>

        <div className='language'>
          <p>English (US) · <span className='lang_link'>Español</span> · <span className='lang_link'>Português (Brasil)</span> · <span className='lang_link'>Français (France)</span> · <span className='lang_link'>Deutsch</span></p>
        </div>

        <div className='legal'>
          <p>Privacy · Terms · Advertising · Ad Choices · <br/>Cookies · More <br/>
            <span className='fb_legal'>Facebook © 2018</span><br/></p>
        </div>
      </div>
    )
  }
}

export default Info;