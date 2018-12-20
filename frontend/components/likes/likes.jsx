import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props)
    this.handleLikeLogic = this.handleLikeLogic.bind(this)
  };

  handleLikeLogic() {
    for (let key in this.props.likes) {
      let checking = this.props.likes[key]
      if (checking.user_id === this.props.currentUser.id && 
          checking.object_type === this.props.object_type && 
          checking.object_id === this.props.object_id) {
        return (
          <div className='comment_post_container'>
            <div onClick={() => this.props.removeLike(this.props.currentUser.id, checking.id)}>
              <div className='post_like_button_clicked'>
                <i class="far fa-thumbs-up"></i><span className='like_post_button_text'>Like</span>
              </div>
            </div>
          </div>
        )
      }
    }
    return (
      <div className='comment_post_container'>
        <div onClick={() => this.props.addLike(this.props.currentUser.id, this.props.object_type, this.props.object_id)}>
          <div className='post_like_button'>
            <i class="far fa-thumbs-up"></i><span className='like_post_button_text'>Like</span>
          </div>
        </div>
      </div>
    )
  }

  handleLikeButtonType() {
    if (this.props.object_type === 'Post') {
      return (
        <div>
          {this.handleLikeLogic()}
        </div>
      )
    } else {
      return (
        <div onClick={() => this.handleLikeLogic()}>
          {/* styling for comment button */}
          Like Comment
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.handleLikeButtonType()}
      </div>
    )
  }
};

export default Likes;