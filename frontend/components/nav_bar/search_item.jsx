import React from 'react';

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <div>
          {this.props.user.name}
        </div>
      </li>
    )
  }
};

export default SearchItem;