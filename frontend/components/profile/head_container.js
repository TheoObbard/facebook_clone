import { connect } from 'react-redux';
import Head from './head';
import { fetchUser, updateCoverPhoto, updateProfilePicture } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId], 
    userId: ownProps.match.params.userId,
    currentUser: state.session.id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)), 
    updateCoverPhoto: (id, formData) => dispatch(updateCoverPhoto(id, formData)), 
    updateProfilePicture: (id, formData) => dispatch(updateProfilePicture(id, formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)