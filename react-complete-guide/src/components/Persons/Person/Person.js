import React, { Component } from 'react';
import './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor()');
    this.state = {
      persons: [
        { id: '1', name: "Léo", age: 35 },
        { id: '2', name: "Fabi", age: 32 },
        { id: '3', name: "Guel", age: 18 }
      ],
      showPersons: false
    };  
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
  }

  render() {
    console.log('[Person.js] Inside render()')

    return (
      <div className="Person">
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

export default Person;