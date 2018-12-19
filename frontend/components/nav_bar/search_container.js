import { connect } from 'react-redux';
import Search from './search';
import { searchUsers } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    searchedUsers: state.ui, 
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchUsers: (data) => dispatch(searchUsers(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);