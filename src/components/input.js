import React, { Component } from 'react';

export default class Input extends Component {


  render() {
    return (
      <div className='input'>
          {this.props.children}
      </div>
    );
  }
}