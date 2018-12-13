import React from 'react';

class Head extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchUser(this.props.userId)
  };

  render () {
    return (
      <h1>Here is where your cover pic and shit will go!</h1>
    )
  };
}

export default Head;