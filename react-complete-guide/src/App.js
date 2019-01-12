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

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 36},
        { name: "Fabiana", age: 37},
        { name: "Miguel", age: 7},
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Leonardo", age: 36},
        { name: event.target.value, age: 37},
        { name: "Miguel", age: 7},
      ] 
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Nado")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Léo")}
          changed={this.nameChangedHandler}>My Hobbies: Cooking</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />

      </div>
    );
  }
}

export default App;
