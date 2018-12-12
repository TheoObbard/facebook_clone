import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './Signup';

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user))
  }
};

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
