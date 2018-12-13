import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';
import { login } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)), 
    login: (user) => dispatch(login(user))
  }
};

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
