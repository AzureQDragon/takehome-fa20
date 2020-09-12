import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <Counter count = {this.props.rating}/>
      </div> 
    )
  }
}

export default App
