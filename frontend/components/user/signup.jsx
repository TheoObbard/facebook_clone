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
    this.handleDemo = this.handleDemo.bind(this);
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
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.login({
      email: 'andy', 
      password: 'password'
    })
  }

  render() {
    const errors = this.props.errors.map(error => <li className='sign_up_errors' key={error}>{error}</li>)

    return (
      <div>
        <div className='splash_content'>
          <div className='blurb'>
            <h1>Connect with friends and the <br/> world around you on Facebook.</h1>
            <div className='blurbie'>
              <div className='update_icon'></div>
              <h4><span className='bold_text'>See photos and updates</span> from friends in News Feed.</h4>
            </div>
            <div className='blurbie'>
              <div className='new_icon'></div>
              <h4><span className='bold_text'>Share what's new</span> in your life on your Timeline.</h4>
            </div>
            <div className='blurbie'>
              <div className='find_icon'></div>
              <h4><span className='bold_text'>Find more</span> of what you're looking for with Facebook Search.</h4>
            </div>
          </div>

          <div className='new_account'>
            <h1 className='sign_up_text'>Sign Up</h1>
            <h3 className='free_text'>It’s free and always will be.</h3>
            <form>
              <label className='form'>
                <input 
                  className='name_input' 
                  type='text' value={this.state.name} 
                  onChange={this.handleInput('name')}
                  placeholder='Name'>
                </input>
              </label>

              <label className='form'>
                <input 
                  className='email_input' 
                  type='text' value={this.state.email} 
                  onChange={this.handleInput('email')}
                  placeholder='Email'>
                </input>
              </label>

              <label className='form'>
                <input 
                  className='password_input' 
                  type='password' 
                  value={this.state.password} 
                  onChange={this.handleInput('password')}
                  placeholder='Password'>
                </input>
              </label>

              <div className='disclaimer'>
                By clicking Sign Up, you agree to our Terms, Data Policy <br/>
                and Cookies Policy. You may receive SMS Notifications from<br/>
                us and can opt out any time.
              </div>

              <div className='button_container'>
                <button className='sign_up' type='submit' onClick={this.handleSubmit}>Sign Up</button>
                <button className='demo_login' type='submit' onClick={this.handleDemo}>Demo Login</button>
              </div>
              {errors}
            </form>
          </div>
        </div>
        <div className='footer'>
          <div className='github'>
            <div className='github_logo'></div>
            <a className='github_text' href="https://github.com/TheoObbard">Github</a>
          </div>

          <div className='linkedin'>
            <div className='linkedin_logo'></div>
            <a className='linkedin_text' href="https://www.linkedin.com/in/theo-obbard-41889780/">LinkedIn</a>
          </div>
        </div>
      </div>
    );
  }
};

export default Signup;