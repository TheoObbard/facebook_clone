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
      <Link className='search_item' to={`/user/${this.props.user.id}`}>
        <div className='search_user_name'>{this.props.user.name}</div>
      </Link>
    )
  }
};

export default SearchItem;