import React from 'react';

class NotFound extends React.Component {
  render () {
    return (
      <div className='not_found_page'>
        <h1>This page isn't available</h1>
        <h3>The link you followed may be broken, or the page may have been removed.</h3>
        <div className='broken_thumb'></div>
      </div>
    )
  }
}

export default NotFound;