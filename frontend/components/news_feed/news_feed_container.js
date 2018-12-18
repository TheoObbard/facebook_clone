import { connect } from 'react-redux';
import NewsFeed from './news_feed';
import { fetchFriends } from '../../actions/friend_actions';
import { fetchUser } from '../../actions/profile_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    session: state.session, 
    users: state.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFriends: (id) => dispatch(fetchFriends(id)), 
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)