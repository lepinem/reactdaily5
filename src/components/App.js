import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';
import BaseLayout from './BaseLayout'
// import Header from './Header'
import Parent from './Parent'
// import Footer from './Footer'


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <BaseLayout>

          <Parent />

        </BaseLayout>
      </div>
    )
  }
}

export default App;
