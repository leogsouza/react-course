import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from "../../../axios-orders";
import Input from '../../../components/UI/Input/Input';

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
        <Input inputtype="input" type="text" name="name" placeholder="Your name"/>
        <Input inputtype="input" type="text" name="email" placeholder="Email"/>
        <Input inputtype="input" type="text" name="street" placeholder="Street"/>
        <Input inputtype="input" type="text" name="postal" placeholder="Postal code"/>
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