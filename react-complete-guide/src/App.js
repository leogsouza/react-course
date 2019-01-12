import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Léo", age: 35},
      { name: "Fabi", age: 32},
      { name: "Guel", age: 18},
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: "Leonardo", age: 36},
        { name: "Fabiana", age: 37},
        { name: "Miguel", age: 7},
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
  }
}

export default App;
