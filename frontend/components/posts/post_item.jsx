import React from 'react';

class PostItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='post_container'>
        <p>{this.props.post.created_at}</p> 
        <h3>{this.props.post.body}</h3>
        {/* <Comment /> */}
      </div>
    )
  }
}

export default PostItem;