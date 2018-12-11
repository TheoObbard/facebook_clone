import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '', 
      name: '', 
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInput(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      // .then( () => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <label>
            email 
            <input type='text' value={this.state.email} onChange={this.handleInput('email')}></input>
          </label>

          <label>
            name
            <input type='text' value={this.state.name} onChange={this.handleInput('name')}></input>
          </label>

          <label>
            password
            <input type='password' value={this.state.password} onChange={this.handleInput('password')}></input>
          </label>

          <button type='submit' onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default Signup;