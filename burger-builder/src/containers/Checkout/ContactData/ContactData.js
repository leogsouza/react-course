import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from "../../../axios-orders";
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    orderForm: {      
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: 'Leonardo Souza'
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Steet',
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code',
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail',
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayName: 'Fastest'},
            {value: 'cheapest', displayName: 'Cheapest'},
          ]
        },
        value: ''
      }
      
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    
    this.setState({ loading: true });

    const formData = {};

    for(let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: parseFloat(this.props.totalPrice),
      orderData: formData
    };
    axios
      .post("/orders.json", order)
      .then(response => {        
        this.setState({ loading: false})
        this.props.history.push('/');
      })
      .catch(error => this.setState({ loading: false}));
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }

    updatedFormElement.value = event.target.value;

    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});
  }

  render() {
    const formElements = [];
    for (const key in this.state.orderForm) {
      if (this.state.orderForm.hasOwnProperty(key)) {
        formElements.push({
          id: key,
          config: this.state.orderForm[key]
        });
      }
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map(formElement => (
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            defaultValue={formElement.config.value} 
            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ))}
        <Button btnType="Success">ORDER</Button>
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