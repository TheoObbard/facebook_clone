import React from 'react';
import CommentItem from './comment_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.props.fetchComments(this.props.post.id).then(
        (comments) => this.getPoster(comments)
      );
    }
  }

  componentDidMount() {
    this.props.fetchComments(this.props.post.id).then(
      (comments) => this.getPoster(comments)
    );
  }

  getPoster(comments) {
    for (let key in comments) {
      if (this.state.entities.users[comments[key].poster_id]) {
        return 
      } else {
        this.props.fetchUser(comments[key].poster_id)
      }
    }
  }

  createCommentItems() {
    const allComments = [];
    for (let key in this.props.comments) {
      let poster = this.props.users[this.props.comments[key].poster_id]
      if (this.props.comments[key].post_id === this.props.post.id) {
        allComments.push(<CommentItem comment={this.props.comments[key]}
                                      post={this.props.post}
                                      poster={poster}
                                      key={key}
                                      likes={this.props.likes}
                                      fetchCommentLikes={this.props.fetchCommentLikes}
        />)
      }
    }
    return allComments
  }

  render() {
    return (
      <div>
        {this.createCommentItems()}
      </div>
    )
  }
}

export default CommentIndex;