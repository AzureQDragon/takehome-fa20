import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      inputValue: ''
    }
    this.addRestaurant=this.addRestaurant.bind(this)
  }

  
  
  render() {
    return (
      <div className="App">
       
        <Counter/>
      
        
        <Instructions complete={true}/>
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />

        ))}

        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}></input>
        <button type="button" onClick = {this.addRestaurant}>Submit</button>
      </div>
    )
    
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  addRestaurant() {
    //let newRestaurant = {id: 4, name: "thing", rating: 0}
    let newRestaurant = {id: this.state.restaurants.length + 1, name: this.state.inputValue, rating: 0}
    this.setState((prevState) => ({restaurants: [...prevState.restaurants, newRestaurant]}))
  }

}

export default App
