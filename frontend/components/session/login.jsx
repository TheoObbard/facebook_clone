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
    this.props.login(this.state).then(
      // () => debugger
      () => this.props.history.push('/')
    )
  }

  render() {
    const errors = this.props.errors.map( error => <li className='login_errors' key={error}>{error}</li> )


    return (
      <div>
        <form className='login_form'>
          <label className='input_label'>
            Email
            <input 
              className='login_input'
              type='text' 
              value={this.state.email} 
              onChange={this.handleInput('email')}>
            </input>
            <div className='forgot_account'></div>
          </label>

          <label className='input_label'>
            Password
            <input 
              className='login_input'
              type='password' 
              value={this.state.password} 
              onChange={this.handleInput('password')}>
            </input>
            <div className='forgot_account'>Forgot account?</div>
          </label>

          <button className='login_button' type='submit' onClick={this.handleSubmit}>Log In</button>
        </form>
        {errors}
      </div>
    );
  }
};

export default Login;