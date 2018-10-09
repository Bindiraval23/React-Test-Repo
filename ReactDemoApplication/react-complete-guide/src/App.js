import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state={
    person : [{name:'Bindi', age:20}, {name:"Mark", age:22}, {name:"Khyati", age:24}, {name:"Sanyami", age:26}], 
      otherState:"Some other value"
  }
  
  switchNameHandler=()=>{
    this.setState({
      person : [{name:'Bindi Raval', age:20}, {name:"Mark", age:22}, {name:"Khyati", age:24}, {name:"Sanyami", age:20}]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World from React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}/>
      <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age} click={this.switchNameHandler}>
          {this.state.otherState}        
        </Person>
      <Person 
        name={this.state.person[2].name}
        age={this.state.person[2].age}/>
      <Person 
        name={this.state.person[3].name} 
        age={this.state.person[3].age}/>
      </div>
    );    
  }
}

export default App;
