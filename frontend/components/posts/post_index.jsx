import React from 'react';
import PostItem from './post_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    this.getPoster = this.getPoster.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.props.fetchPosts(this.props.user.id).then(
        (posts) => this.getPoster(posts)
      );
    }
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchPosts(this.props.user.id).then(
        (posts) => this.getPoster(posts)
      );
    }
    this.props.fetchFriends(this.props.currentUser.id);

  }

  getPoster(promise) {
    promise.then((posts) => { 
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
        likes={this.props.likes}
        fetchPostLikes={this.props.fetchPostLikes}
        post={this.props.posts[key]}
        user={this.props.user}
        poster={poster}
        comments={this.props.comments}
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