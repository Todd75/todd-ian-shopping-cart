/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log('loadCart is working');
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let bodyRow = document.querySelectorAll('#cart tbody tr');
  for (let i = 0; i < bodyRow.length; i++) {
    if (bodyRow[i]) {
      bodyRow[i].remove();
    }
  }
  console.log(bodyRow);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let cartTableBody = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart


  // TODO: Create a TR
  let tableRow = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let remove = document.createElement('td');
  let quantity = document.createElement('td');
  let item = document.createElement('td');
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  cartTableBody.appendChild('tr');
  tableRow.appendChild(remove);
  tableRow.appendChild(quantity);
  tableRow.appendChild(item);
}

function removeItemFromCart(event) {
  cart.removeItemFromCart
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
