import React from 'react';
import CommentForm from '../comments/comment_form_container';
import CommentIndex from '../comments/comment_index_container';
import { Link } from 'react-router-dom';

class PostItem extends React.Component {
  constructor(props) {
    super(props)
  }

  parseDate(dateString) {
    let newDate = new Date(dateString)
    return (
      <p>
        {this.figureOutMonth(newDate.getMonth())} {newDate.getDate()}
      </p>
    )
  };

  nameReady() {
    if (this.props.poster) {
      return (
        <div className='user_data_per_post'>
          <img className='poster_profile_pic' src={this.props.poster.profilePicUrl} alt=""/>
          <div className='name_date_container'>
            <Link className='post_item_user_name' to={`/user/${this.props.poster.id}`}><p>{this.props.poster.name}</p></Link>
            <div className='post_date'>{this.parseDate(this.props.post.created_at)}</div>
          </div>
        </div>
      )
    }
  };

  // had to write my own date parser because datetime doesnt seem to have a monthstring one
  figureOutMonth(monthNum) {
    switch (monthNum) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
      default:
        break;
    }
  };

  render() {
    return (
      <div className='post_container'>
        {this.nameReady()}
        <h3>{this.props.post.body}</h3>
        <CommentForm user={this.props.user}
                     post={this.props.post}
        />
        <CommentIndex user={this.props.user}
                      post={this.props.post}
        />
      </div>
    )
  }
}; 


export default PostItem;