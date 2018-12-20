import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/profile_actions';
import { fetchFriends } from '../../actions/friend_actions';
import { fetchPostLikes } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id], 
    posts: state.entities.posts, 
    users: state.entities.users, 
    session: state.session, 
    likes: state.entities.likes
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (userId) => dispatch(fetchPosts(userId)), 
    fetchUser: (id) => dispatch(fetchUser(id)), 
    fetchFriends: (id) => dispatch(fetchFriends(id)), 
    fetchPostLikes: (post_id) => dispatch(fetchPostLikes(post_id)) // oops bad syntax with snake case
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)