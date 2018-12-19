import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  handleType(e) {
    console.log(e.target.value);
    this.props.searchUsers({
      name_start: e.target.value
    })
  };

  render() {
    return (
      <div className='search_bar'>
        <input onChange={(e) => this.handleType(e)} className='search_bar_input' placeholder='Search' type="text" />
        <div className='search_bar_submit'>
          <div className='search_icon'></div>
        </div>
      </div>
    )
  }
};

export default Search;