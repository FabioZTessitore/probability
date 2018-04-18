import React, { Component } from 'react';

class Error extends Component {

  render() {
    if (this.props.message) {
      return (
        <div className="form-group">
          <div className="alert alert-danger">{this.props.message}</div>
        </div>
      );
    }
    return <div></div>;
  }

}

export default Error;
