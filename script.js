// importing module
// import {
//   addToCart,
//   totalPrice as price,
//   tq as totalQuantity,
// } from './shoppingCart.js';
// addToCart(5, 'breads');
// console.log(price, totalQuantity);

console.log('Importing module');
// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('melons', 6);

console.log(cart);
