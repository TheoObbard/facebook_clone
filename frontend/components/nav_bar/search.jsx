import React from 'react';
import SearchItem from './search_item';

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

  searchDropDown() {
    if (this.props.searchedUsers) {
      const user = () => {
        let users = []
        for (let key in this.props.searchedUsers) {
          users.push(<SearchItem key={key} user={this.props.searchedUsers[key]} />)
        }
        return users
      } 
      return (
        <div className='search_modal'>
          <ul>
            {user()}
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='search_bar'>
        <input onChange={(e) => this.handleType(e)} className='search_bar_input' placeholder='Search' type="text" />
        <div className='search_bar_submit'>
          <div className='search_icon'></div>
        </div>
        {this.searchDropDown()}
      </div>
    )
  }
};

export default Search;