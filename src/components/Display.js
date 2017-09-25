//Display.js
import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div className='wrapper'>
        {this.props.sayWhat}
      </div>
    )
  }
}
