import React, { PureComponent } from "react";
import "./App.css";
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from "../components/Persons/Persons";

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor()');
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
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    console.log('[App.js] Inside render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    

    return (
      
        <div className="App">
          <Cockpit showPersons={this.state.showPersons}
            appTitle={this.props.title}
            persons={this.state.persons} clicked={this.togglePersonsHandler} />
          {persons}
        </div>      
    );
  }
}

export default App;
