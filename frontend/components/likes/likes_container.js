import { connect } from 'react-redux';
import Likes from './likes';
import { addLike, removeLike } from '../../actions/like_actions';

const mapDispatchToProps = dispatch => {
  return {
    addLike: (user_id, object_type, object_id) => dispatch(addLike(user_id, object_type, object_id)),
    removeLike: (user_id, like_id) => dispatch(removeLike(user_id, like_id))
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id], 
    likes: state.entities.likes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)