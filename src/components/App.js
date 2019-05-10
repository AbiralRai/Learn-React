import React, { Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './addNinja';

class App extends Component{
  state = {
    ninjas: [
      { name: 'Ryu', age: '20', rank: 'black' },
      { name: 'Crystal', age: '24', rank: 'black1' },
      { name: 'Abi', age: '23', rank: 'Master' }
    ]
  }
  addNinja = (ninja) => {
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas:ninjas
    });
    
  }
  deleteNinja = (id) => {
  let ninjas = this.state.ninjas.filter(ninja => {
    return ninja.id !== id
  });
  this.setState({
    ninjas: ninjas
  })

  }
  render() {
    return(
      <div className="App">
        <h1> My first React app </h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja  addNinja={this.addNinja}/>
      </div>
    )
  }
}

export default App;
