import { connect } from 'react-redux';
import Head from './head';
import { fetchUser } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultUser = {};
  return {
    user: state.entities.users[ownProps.match.params.userId] || defaultUser, 
    userId: ownProps.match.params.userId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)