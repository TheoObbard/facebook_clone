import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props)
  }

  ensureFetchBeforeRender() {
    if (this.props.poster){
      return (
        <p>{this.props.poster.name}</p>
      )
    }
  }

  render() {
    return (
      <div className='comment_container'>
        {this.ensureFetchBeforeRender()}
        <p>{this.props.comment.body}</p>
      </div>
    )
  }
}

export default CommentItem;