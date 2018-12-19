import React from 'react';
import { Link } from 'react-router-dom';

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }

  redirect() {

  }

  render() {
    return (
      <div className='search_user_name'>{this.props.user.name}</div>
    )
  }
};

export default SearchItem;