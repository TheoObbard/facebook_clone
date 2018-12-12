import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../user/login_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUser: this.props.currentUser }
  }

  // componentDidUpdate(oldprops) {
  //   if (oldprops.currentUser !== this.props.currentUser) {
  //     this.render()
  //   }
  // }

  render() {
    const nav = this.props.currentUser ? (
      <div>
        {/* <button onClick={logout}>Log Out</button> */}
        <h1>Someone is signed in!</h1>
        <button onClick={this.props.logout}>Log out</button>
      </div>
    ) : (
      <div>
        <h1>facebook</h1>
        <Login />
      </div>
    )

    return (
      <header>
        <div>
          {nav}
        </div>
      </header>
    )
  }

}

export default NavBar;