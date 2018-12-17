import React from 'react';
import CommentForm from '../comments/comment_form_container';
import CommentIndex from '../comments/comment_index_container';

class PostItem extends React.Component {
  constructor(props) {
    super(props)
  }

  nameReady() {
    if (this.props.poster) {
      return (
        <p>{this.props.poster.name}</p>
      )
    }
  }

  render() {
    return (
      <div className='post_container'>
        {this.nameReady()}
        <p>{this.props.post.created_at}</p> 
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
}

export default PostItem;