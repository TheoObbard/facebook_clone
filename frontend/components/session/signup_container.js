import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './Signup';

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user))
  }
};

export default connect(null, mapDispatchToProps)(Signup)
