// exporting
console.log('exporting module');

const shippingCost = 10;
const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 5;

export { totalPrice, totalQuantity as tq, cart };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
}
