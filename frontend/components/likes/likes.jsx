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
        this.props.removeLike(this.props.currentUser.id, checking.id)
        return
      }
    }
    this.props.addLike(this.props.currentUser.id, this.props.object_type, this.props.object_id)
  }

  render() {
    return (
      <div onClick={() => this.handleLikeLogic()}>
        Like
      </div>
    )
  }
};

export default Likes;