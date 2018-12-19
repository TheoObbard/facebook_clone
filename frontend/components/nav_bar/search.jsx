import React from 'react';
import SearchItem from './search_item';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleType(e) {
    this.props.searchUsers({
      name_start: e.target.value
    })
    this.setState({ search: e.target.value });
  };

  searchDropDown() {
    if (this.state.search !== '') {
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

  handleSearchButton() {
    if (this.props.searchedUsers[0] !== undefined) {
      return this.props.searchedUsers[0].id
    } else {
      return this.props.currentUser.id
    }
  };

  render() {
    return (
      <div className='search_bar'>
        <input onChange={(e) => this.handleType(e)} className='search_bar_input' placeholder='Search' type="text" />
        <Link to={`/user/${this.handleSearchButton()}`} className='search_bar_submit'>
          <div className='search_icon'></div>
        </Link>
        {this.searchDropDown()}
      </div>
    )
  }
};

export default Search;