import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    )
  }
}

// 'hot' enables react-hot-loader
export default hot(module)(App)
