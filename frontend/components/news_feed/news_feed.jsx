import React from 'react';
import PostForm from '../posts/post_form_container';
import PostIndex from '../posts/newsfeed_post_index_container';
import { Link } from 'react-router-dom';

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
          <div className='left_nav'>
            <div className='left_content_item'>
              <img className='tiny_prof_pic' src={this.props.currentUser.profilePicUrl} alt="profile_pic"/>
              <p><Link className='name_link' to={`/user/${this.props.currentUser.id}`}>{this.props.currentUser.name}</Link></p>
            </div>
            <br/>
            <div className='left_content_item_always_hov'>
              <div className='nf_icon'></div>
              <p>News Feed</p>
            </div>
            <div className='left_content_item'>
              <div className='msg_icon'></div>
              <p>Messenger</p>
            </div>
            <div className='left_content_item'>
              <div className='wtch_icon'></div>
              <p>Watch</p>
            </div>
            <div className='left_content_item'>
              <div className='mkt_icon'></div>
              <p>Marketplace</p>
            </div>
            <br/>
            <div className='explore'>Explore</div>
            <div className='left_content_item'>
              <div className='grp_icon'></div>
              <p>Groups</p>
            </div>
            <div className='left_content_item'>
              <div className='pgs_icon'></div>
              <p>Pages</p>
            </div>
            <div className='left_content_item'>
              <div className='evnt_icon'></div>
              <p>Events</p>
            </div>
            <div className='left_content_item'>
              <div className='fnd_icon'></div>
              <p>Fundraisers</p>
            </div>
            <div className='left_content_item'>
              <div className='jbs_icon'></div>
              <p>Jobs</p>
            </div>
          </div>
          <div className='newsfeed_post_content'>
            <PostForm user={this.props.currentUser} />
            <PostIndex user={this.props.currentUser} />
          </div>
          <div className='ads'>
            <br/>
            <div className='explore'>Sponsored</div>
            <br/>
            <div className='flexo_pic'>
              <div className='flexo_banner'></div>
            </div>
            <div>
              <p className='ad_text'>
                The Ultimate Driving Experience <br />
                flexo.com
              </p>
            </div>

            <div className='burton_pic'></div>
            <div>
              <p className='ad_text'>
                Winter is here.
              </p>
            </div>
          </div>
        </div>
      )
    }
    return null;
  }
}

export default NewsFeed;