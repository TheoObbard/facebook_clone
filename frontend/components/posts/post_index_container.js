import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id], 
    posts: state.entities.posts
    // user: state.entities.users[ownProps.match.params.userId] 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)