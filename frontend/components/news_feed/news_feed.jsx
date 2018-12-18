import React from 'react';
import PostForm from '../posts/post_form_container';
import PostIndex from '../posts/newsfeed_post_index_container';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.session.id)
  }

  render() {
    if (this.props.session.id) {
      return (
        <div className='newsfeed_page'>
          <div className='newsfeed_post_content'>
            <PostForm user={this.props.currentUser} />
            <PostIndex user={this.props.currentUser} />
          </div>
        </div>
      )
    }
    return null;
  }
}

export default NewsFeed;