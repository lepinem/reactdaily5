// BaseLayout.js

import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
// import Parent from './Parent'

export default class BaseLayout extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
    <div className="blayout">
      <div className="NavBar">
        <Header />
      </div>
      <div className="input">
        {this.props.children}
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
    )
  }
}
