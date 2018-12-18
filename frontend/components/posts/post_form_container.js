import { connect } from 'react-redux';
import PostForm from './post_form';
import { addPost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id], 
    session: state.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post, userId) => dispatch(addPost(post, userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)