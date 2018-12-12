import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user))
  }
};

const mapStateToProps = state => {
  return {
    errors: state.errors.user
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
