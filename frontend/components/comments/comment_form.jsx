import React from 'react'; 

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '', 
      poster_id: this.props.currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleType = this.handleType.bind(this)
  };

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
    this.props.addComment(this.state, this.props.user.id).then(
      this.setState({
        body: ''
      })
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add comment
            <input onChange={this.handleType()} placeholder={`write a comment...`} value={this.state.body} type="text" name="" id=""/>
          </label>
        </form>
      </div>
    )
  }
}

export default CommentForm;