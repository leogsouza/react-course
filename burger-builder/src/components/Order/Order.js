import React from 'react';

import classes from './Order.module.css';

const order = (props) =>  (
  <div className={classes.Order}>
    <p>Ingredients: Salad (1)</p>
    <p>Price: USD 5.00</p>
  </div>
);

export default order;