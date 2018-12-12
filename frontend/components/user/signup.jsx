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
  }

  render() {
    const errors = this.props.errors.map(error => <li key={error}>{error}</li>)

    return (
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
            {errors}
          </form>
        </div>
      </div>
    );
  }
};

export default Signup;