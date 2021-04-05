// Importing module
// import { addToCart, totalPrice as price , tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');
// console.log(shippingCost);

import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('bread', 5);
console.log(shoppingCart.totalPrice);

