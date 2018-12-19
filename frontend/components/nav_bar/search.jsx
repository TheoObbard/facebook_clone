import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='search_bar'>
        <input className='search_bar_input' placeholder='Search' type="text" />
        <div className='search_bar_submit'>
          <div className='search_icon'></div>
        </div>
      </div>
    )
  }
};

export default Search;