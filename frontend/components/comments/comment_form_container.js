import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { addComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (comment, postId) => dispatch(addComment(comment, postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)