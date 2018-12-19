import { connect } from 'react-redux';
import Search from './search';
import { searchUsers } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    searchedUsers: state.ui
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchUsers: (data) => dispatch(searchUsers(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)