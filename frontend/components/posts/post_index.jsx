import React from 'react';
import PostItem from './post_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.props.fetchPosts(this.props.user.id);
    }
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.user.id);
  }

  createPostItems() {
    const allPosts = [];
    for (let key in this.props.posts) {
      allPosts.push(<PostItem post={this.props.posts[key]}/>)
    }
    return allPosts.reverse()
  }

  render() {
    return (
      <div>
        {this.createPostItems()}
      </div>
    )
  }
}

export default PostIndex;