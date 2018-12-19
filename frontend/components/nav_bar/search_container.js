import { connect } from 'react-redux';
import Search from './search';
import { searchUsers } from '../../actions/search_actions';

const mapDispatchToProps = dispatch => {
  return {
    searchUsers: (data) => dispatch(searchUsers(data))
  }
};

export default connect(null, mapDispatchToProps)(Search)