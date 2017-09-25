// Parent.js

import React, { Component } from 'react'
import Child from './Child'
import Display from './Display'

export default class Parent extends Component {
  constructor(props){
    super(props)

    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }
  }

  handleInput = (submit) => {
    submit.preventDefault()
    // //set the state on input change
    this.setState({
      whatToSay: submit.target.value
    })
  }

  handleSubmit = (submit) => {
    submit.preventDefault()
    //check console to see if firing
    console.log("fired")
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({
      whatToSay: this.state.whatToSay,
      whatWasSaid: this.state.whatToSay
    })
    //clear our input by resetting state
    this.setState({
      whatToSay: ""
    })
  }


  render() {
    return (
      <div className='mother'>
        <div>
          <input onChange={this.handleInput} type="text" value={this.state.whatToSay} placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <Child onClick={this.handleSubmit} />
          <h2>
          <Display sayWhat={this.state.whatWasSaid} />
        </h2>
        </div>
      </div>
    )
  }
}
