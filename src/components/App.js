import React, { Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component{
  state = {
    ninjas: [
      { name: 'Ryu', age: '20', rank: 'black' },
      { name: 'Crystal', age: '24', rank: 'black1' },
      { name: 'Abi', age: '23', rank: 'Master' }
    ]
  }
  render() {
    return(
      <div className="App">
        <h1> My first React app </h1>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    )
  }
}

export default App;
