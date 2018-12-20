import React from 'react';
import { Link } from 'react-router-dom';
import Likes from '../likes/likes_container';

class CommentItem extends React.Component {
  constructor(props) {
    super(props)
    this.countLikes = this.countLikes.bind(this)
  }

  countLikes() {
    let count = 0
    for (let key in this.props.likes) {
      if (this.props.likes[key].object_type === 'Comment' && this.props.likes[key].object_id === this.props.comment.id) {
        count += 1;
      }
    }
    if (count > 0) {
      return (
        <div className='comment_like_display_container'>
          <div className='comment_liked_icon'></div>
          <div className='count_digits_comment_likes'>{count}</div>
        </div>
      )
    }
  }

  componentDidMount() {
    this.props.fetchCommentLikes(this.props.comment.id, this.props.post.id)
  }

  ensureFetchBeforeRender() {
    if (this.props.poster){
      return (
        <div className='comment_and_like_container'>
          <div className='comment_container'>
            <img className='commenter_img' src={this.props.poster.profilePicUrl} alt="" />
            <div className='comment_username_and_body'>
              <Link className='post_item_commenter_name' to={`/user/${this.props.poster.id}`}><p className='commenter_name_text'>{this.props.poster.name}</p></Link>
              <div className='comment_body'>
                <p>{this.props.comment.body}</p>
              </div>
            </div>

            <div>
              {this.countLikes()}
            </div>
          </div>
          <Likes object_type='Comment'
            object_id={this.props.comment.id}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.ensureFetchBeforeRender()}
      </div>
    )
  }
}

export default CommentItem;