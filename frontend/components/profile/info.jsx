import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props) // just target user here
  }

  render() {
    const data = this.props.map( dataType => {
      switch (dataType) {
        case 'birthday':
          return (<li>Born on {this.props.dataType}</li>)
        case 'job':
          return (<li>{this.props.dataType} at {this.props.workplace}</li>)
        case 'location':
          return (<li>Lives in {this.props.dataType}</li>)
        case 'relationship_stat':
          return (<li>{this.props.dataType}</li>)
        default:
          break;
      }
    })
    return (
      <div>
        <ul>
          {data}
        </ul>
      </div>
    )
  }
}

export default Info;