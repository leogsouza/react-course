import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor()');
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
    console.log('[Persons.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
  }
 
  render() {
    console.log('[Persons.js] Inside render()')
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        key={person.id}
        name={person.name}
        age={person.age} 
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;