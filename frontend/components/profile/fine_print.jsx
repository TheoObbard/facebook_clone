import React from 'react';

class FinePrint extends React.Component {

  render() {
    return (
      <div className='fine_print'>
        <div className='language'>
          <p>English (US) · <span className='lang_link'>Español</span> · <span className='lang_link'>Português (Brasil)</span> · <span className='lang_link'>Français (France)</span> · <span className='lang_link'>Deutsch</span></p>
        </div>

        <div className='legal'>
          <p>Privacy · Terms · Advertising · Ad Choices · <br />Cookies · More <br />
            <span className='fb_legal'>Facebook © 2018</span><br /></p>
        </div>
      </div>
    )
  }
};

export default FinePrint;