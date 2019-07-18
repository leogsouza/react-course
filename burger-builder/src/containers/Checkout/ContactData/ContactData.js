import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from "../../../axios-orders";

import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: parseFloat(this.props.totalPrice),
      customer: {
        name: "Leonardo Souza",
        address: {
          street: "Test Avenue 123",
          zipCode: "12345",
          country: "Brazil"
        },
        email: "leonardo@test.com",
        deliveryMethod: "express"
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {        
        this.setState({ loading: false})
        this.props.history.push('/');
      })
      .catch(error => this.setState({ loading: false}));
  }

  render() {
    let form = (
      <form>
        <input type="text" className={classes.Input} name="name" placeholder="Your name"/>
        <input type="text" className={classes.Input} name="email" placeholder="Email"/>
        <input type="text" className={classes.Input} name="street" placeholder="Street"/>
        <input type="text" className={classes.Input} name="postal" placeholder="Postal code"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />
    }

  

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }

}

export default ContactData;