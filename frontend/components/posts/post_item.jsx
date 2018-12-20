import React from 'react';
import CommentForm from '../comments/comment_form_container';
import CommentIndex from '../comments/comment_index_container';
import { Link } from 'react-router-dom';
import Likes from '../likes/likes_container';

class PostItem extends React.Component {
  constructor(props) {
    super(props)
    this.countLikes = this.countLikes.bind(this)
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

  countLikes() {
    // count likes in state with this post id and return the sum
    let count = 0
    for (let key in this.props.likes) {
      if (this.props.likes[key].object_type === 'Post' && this.props.likes[key].object_id === this.props.post.id) {
        count += 1;
      }
    }
    return (
      <div>
        {count}
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchPostLikes(this.props.post.id)
  }

  render() {
    return (
      <div className='post_container'>
        {this.nameReady()}
        <div className='post_body'>
          <h3>{this.props.post.body}</h3>
        </div>
        <div>
          Likes count: {this.countLikes()}
        </div>
        <Likes object_type='Post'
               object_id={this.props.post.id}
        />

        <CommentIndex user={this.props.user}
          post={this.props.post}
        />
        
        <CommentForm user={this.props.user}
                     post={this.props.post}
        />
      </div>
    )
  }
}; 


export default PostItem;