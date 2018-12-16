import React from 'react';

class PostItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/* <p>{this.props.created_at}</p> */}
        <h3>{this.props.post.body}</h3>
      </div>
    )
  }
}

export default PostItem;