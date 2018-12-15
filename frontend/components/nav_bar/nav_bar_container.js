import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { getFriendRequests } from '../../actions/friend_actions';
import { fetchUser } from '../../actions/profile_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id], 
    users: state.entities.users,
    friendRequests: state.entities.friendRequests,
    errors: state.errors.session
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()), 
    getFriendRequests: (id) => dispatch(getFriendRequests(id)), 
    fetchUser: (id) => dispatch(fetchUser(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)