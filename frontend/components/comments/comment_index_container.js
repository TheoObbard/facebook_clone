import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/profile_actions';
import { fetchCommentLikes } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id], 
    comments: state.entities.comments, 
    users: state.entities.users, 
    likes: state.entities.likes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (postId) => dispatch(fetchComments(postId)), 
    fetchUser: (id) => dispatch(fetchUser(id)), 
    fetchCommentLikes: (commentId, postId) => dispatch(fetchCommentLikes(commentId, postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)