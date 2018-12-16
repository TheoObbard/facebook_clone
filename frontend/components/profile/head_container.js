import { connect } from 'react-redux';
import Head from './head';
import { fetchUser, updateCoverPhoto, updateProfilePicture } from '../../actions/profile_actions';
import { addReq, fetchFriends } from '../../actions/friend_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users, 
    userId: ownProps.match.params.userId,
    currentUser: state.session.id,
    friendships: state.entities.friendships, 
    friendRequests: state.entities.friendRequests, 
    params: ownProps.match.params
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)), 
    updateCoverPhoto: (id, formData) => dispatch(updateCoverPhoto(id, formData)), 
    updateProfilePicture: (id, formData) => dispatch(updateProfilePicture(id, formData)), 
    addReq: (friendship) => dispatch(addReq(friendship)), 
    fetchFriends: (id) => dispatch(fetchFriends(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)