import React from 'react';
import PostItem from './post_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.props.fetchPosts(this.props.user.id).then(
        (posts) => this.getPoster(posts)
      );
    }
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.user.id).then(
      (posts) => this.getPoster(posts)
    );
  }

  getPoster(promise) {
    promise.then((posts) => {
      console.log(posts.posts);
      
      for (let key in posts) {
        if (this.props.users[posts[key].poster_id]) {
          return
        } else {
          this.props.fetchUser(posts[key].poster_id)
        }
      }
    })
  }

  createPostItems() {
    const allPosts = [];
    for (let key in this.props.posts) {
      let poster = this.props.users[this.props.posts[key].poster_id]
      allPosts.push(<PostItem key={key}
                              post={this.props.posts[key]}
                              user={this.props.user}
                              poster={poster}
      />)
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