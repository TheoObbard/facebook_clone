import React from 'react'; 

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleType = this.handleType.bind(this)
    if (this.props.currentUser) {
      this.state = {
        body: '',
        poster_id: this.props.currentUser.id
      }
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
    this.props.addPost(this.state, this.props.user.id).then(
      this.setState({
        body: ''
      })
    )
  }

  render() {
    return (
      <div className='post_form_container'>
        <form>
          <div className='create_post_banner'>
            <div className='post_icon'></div>
            <p>Create Post</p>
          </div>
          <label>
            <div className='post_inline_content'>
              <img className='poster_profile_pic' src={this.props.currentUser.profilePicUrl} alt="User_photo" />
              <textarea className='post_text_area' onChange={this.handleType()} placeholder={`What's on your mind, ${this.props.currentUser.name}`} name="" id="" cols="30" rows="10" value={this.state.body}></textarea>
            </div>
            <div className='post_button' onClick={this.handleSubmit}>
              <p>Share</p>
            </div>
          </label>
        </form>
      </div>
    )
  }
}

export default PostForm;