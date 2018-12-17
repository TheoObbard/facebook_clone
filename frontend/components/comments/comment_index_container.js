import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/profile_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id], 
    comments: state.entities.comments, 
    users: state.entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (postId) => dispatch(fetchComments(postId)), 
    fetchUser: (id) => dispatch(fetchUser(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)