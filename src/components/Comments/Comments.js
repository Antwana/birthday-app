import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div>
      <h3> Comments</h3>
      <p>{this.props.idea}</p>
      </div>
    )
  }
}



export default Comments
