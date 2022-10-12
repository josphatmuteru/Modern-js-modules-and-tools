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
// add('pizza', 2);
// add('bread', 5);
// add('melons', 6);

// console.log(cart);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${product} ${quantity} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 2);
shoppingCart2.addToCart('pizza', 2);

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
