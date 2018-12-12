import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
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
    this.props.login(this.state)
  }

  render() {
    const errors = this.props.errors.map(error => <li key={error}>{error}</li>)


    return (
      <div>
        <h1>Sign In</h1>
        <form>
          <label>
            email
            <input type='text' value={this.state.email} onChange={this.handleInput('email')}></input>
          </label>

          <label>
            password
            <input type='password' value={this.state.password} onChange={this.handleInput('password')}></input>
          </label>

          <button type='submit' onClick={this.handleSubmit}>Sign In</button>
        </form>
        {errors}
      </div>
    );
  }
};

export default Login;