import React from 'react';

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='search_user_name'>{this.props.user.name}</div>
    )
  }
};

export default SearchItem;