import { connect } from 'react-redux';
import NewsFeed from './news_feed';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    session: state.session, 
    users: state.users
  }
};

export default connect(mapStateToProps)(NewsFeed)