import React from 'react';

import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingregientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>);
    })


  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingregientSummary}
      </ul>
      <p>Continue to Checkout!</p>
      <Button
        btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button      
        btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Wrapper>
  )
};

export default orderSummary;