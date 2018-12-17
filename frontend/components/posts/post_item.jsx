import React from 'react';
import CommentForm from '../comments/comment_form_container';

class PostItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='post_container'>
        <p>{this.props.post.created_at}</p> 
        <h3>{this.props.post.body}</h3>
        <CommentForm user={this.props.user}/>
        {/* <CommentIndex /> */}
      </div>
    )
  }
}

export default PostItem;