// Child.js

import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="card-body">
        <div className="form-group">
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    )
  }
}
