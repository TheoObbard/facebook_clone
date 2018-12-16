import React from 'react'; 

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleType = this.handleType.bind(this)
    this.state = {
      body: '', 
      poster_id: this.props.currentUser.id
    }
  };

  // this keeps the post input from persisting if you switch users pages
  componentDidUpdate(prevProps) {
    if (prevProps.user.id != this.props.user.id) {
      this.setState({
        body: ''
      })
    }
  };

  handleType() {    
    return (e) => {      
      this.setState({
        body: e.target.value
      })
    }
  };

  handleSubmit() {
    this.props.addPost(this.state, this.props.user.id)
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Create Post 
            <textarea onChange={this.handleType()} placeholder={`What's on your mind, ${this.props.currentUser.name}`} name="" id="" cols="30" rows="10" value={this.state.body}></textarea>
            <div onClick={this.handleSubmit}>
              Post
            </div>
          </label>
        </form>
      </div>
    )
  }
}

export default PostForm;