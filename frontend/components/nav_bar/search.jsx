import React from 'react';
import SearchItem from './search_item';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.handleSearchButton = this.handleSearchButton.bind(this)
  }

  handleType(e) {
    this.setState({ search: e.target.value });
    this.props.searchUsers({
      name_start: e.target.value
    })
  };

  searchDropDown() {
    if (this.state.search !== '') {
      const user = () => {
        let users = []
        for (let key in this.props.searchedUsers) {
          users.push(
            <Link key={key} className='search_item' to={`/user/${this.props.searchedUsers[key].id}`}>
              <SearchItem key={key} user={this.props.searchedUsers[key]} />
            </Link>
          )
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

  handleSearchButton() {
    const searchedId = this.props.currentUser.id
    if (this.state.search !== '') {
      for (let key in this.props.searchedUsers) {
        if (key === 1) {
          searchedId = this.props.searchedUsers[key].id
        }
      }
    }
    console.log(searchedId);
    
    return searchedId;
  };

  render() {
    return (
      <div className='search_bar'>
        <form className='search_form' onSubmit={this.handleSearchButton}>
          <input onChange={(e) => this.handleType(e)} className='search_bar_input' placeholder='Search' type="text" />
          <div className='search_bar_submit'>
            <div className='search_icon'></div>
          </div>
        </form>
        {this.searchDropDown()}
      </div>
    )
  }
};

export default Search;