import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchNewsfeedPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/profile_actions';
import { fetchFriends } from '../../actions/friend_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    users: state.entities.users, 
    userId: state.session.id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (userId) => dispatch(fetchNewsfeedPosts()), 
    fetchUser: (id) => dispatch(fetchUser(id)), 
    fetchFriends: (id) => dispatch(fetchFriends(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)