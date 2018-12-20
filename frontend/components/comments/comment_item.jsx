import React from 'react';
import { Link } from 'react-router-dom';
import Likes from '../likes/likes_container';

class CommentItem extends React.Component {
  constructor(props) {
    super(props)
    this.countLikes = this.countLikes.bind(this)
  }

  countLikes() {
    // count likes in state with this post id and return the sum
    let count = 0
    for (let key in this.props.likes) {
      if (this.props.likes[key].object_type === 'Comment' && this.props.likes[key].object_id === this.props.comment.id) {
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
    this.props.fetchCommentLikes(this.props.comment.id, this.props.post.id)
  }

  ensureFetchBeforeRender() {
    if (this.props.poster){
      return (
        <div className='comment_container'>
          <img className='commenter_img' src={this.props.poster.profilePicUrl} alt=""/>
          <div className='comment_username_and_body'>
            <Link className='post_item_commenter_name' to={`/user/${this.props.poster.id}`}><p className='commenter_name_text'>{this.props.poster.name}</p></Link>
            <div className='comment_body'>
              <p>{this.props.comment.body}</p>
            </div>
          </div>

          <div>
            LIKE COUNT: {this.countLikes()}
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