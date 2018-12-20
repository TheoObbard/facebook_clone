import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props)
    this.handleLikeLogic = this.handleLikeLogic.bind(this)
  };

  handleLikeLogic() {
    //if current user has not liked this thing
    this.props.addLike(this.props.currentUser.id, this.props.object_type, this.props.object_id)
    // else 
    // delete the like
  }

  render() {
    return (
      <div onClick={() => this.handleLikeLogic()}>
        LIKE
      </div>
    )
  }
};

export default Likes;