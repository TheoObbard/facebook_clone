import React from 'react';
import { Link } from 'react-router-dom';

class CommentItem extends React.Component {
  constructor(props) {
    super(props)
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