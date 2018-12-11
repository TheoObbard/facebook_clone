import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const nav = this.props.currentUser ? (
      <div>
        <button onClick={logout}>Log Out</button>
      </div>
    ) : (
      <div>
        <h1>facebook</h1>
        <Link to='/login'>Login</Link>
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