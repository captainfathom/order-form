'use strict';

var maxClicks = 25;

function Product (name, path, id) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.id = id;
  this.displayed = 0;
  productList.push(this);
};

var productList = [];

var bag = new Product ('bag', 'img/bag.jpg', 'bag');
var banana = new Product ('banana', 'img/banana.jpg', 'banana');
var bathroom = new Product ('bathroom', 'img/bathroom.jpg', 'bathroom');
var boots = new Product ('boots', 'img/boots.jpg', 'boots');
var breakfast = new Product ('breakfast', 'img/breakfast.jpg', 'breakfast');
var bubblegum = new Product ('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
var chair = new Product ('chair', 'img/chair.jpg', 'chair');
var cthulhu = new Product ('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
var dogDuck = new Product ('dog duck', 'img/dog-duck.jpg', 'dogDuck');
var dragon = new Product ('dragon', 'img/dragon.jpg', 'dragon');
var pen = new Product ('pen', 'img/pen.jpg', 'pen');
var petSweep = new Product ('pet-sweep', 'img/pet-sweep.jpg', 'petSweep');
var scissors = new Product ('scissors', 'img/scissors.jpg', 'scissors');
var shark = new Product ('shark', 'img/shark.jpg', 'shark');
var sweep = new Product ('sweep', 'img/sweep.png', 'sweep');
var tauntaun = new Product ('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
var unicorn = new Product ('unicorn', 'img/unicorn.jpg', 'unicorn');
var usb = new Product ('usb', 'img/usb.gif', 'usb');
var waterCan = new Product ('water-can', 'img/water-can.jpg', 'waterCan');
var wineGlass = new Product ('wine-glass', 'img/wine-glass.jpg', 'wineGlass');

// function to collect order information
// function order (name, qty) {
//   name = name;
//   qty = qty;
// };
// var name = ' ';
// var qty = ' ';
if (localStorage.getItem('order')) {
  var orderArray = JSON.parse(localStorage.getItem('order'));
} else {
  var orderArray = [];
};
// function to create new order instance.

var form = document.getElementById('form');
form.addEventListener('submit', createOrder);

function createOrder (event) {
  event.preventDefault();
  // var newOrder = new Order;
  var name = form.elements['product'].value;
  var qty = parseInt(form.elements['quantity'].value);
  orderArray.push([name, qty]);
  localStorage.setItem('order', JSON.stringify(orderArray));
  // showCart();
  // yourCart();
  form.reset();
}

//works to here!!
to change a cart button to show things in cart
function showCart () {
  var cartIcon = document.getElementById('the button');
  var text = JSON.parse(localStorage.getItem('order', qty));
  cartIcon.innerText = text;
};

function yourCart () {
  var cartItems = document.getElementById('theTable');
  var orderImage = document.createElement('td');
  cartItems.appendChild(orderImage);
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].name === JSON.parse(localStorage.getItem('order', name)) {
      orderImage.innerHTML = productList[i].path;
    }
  }
  find way to insert picture
  orderImageHTML =
  var orderName = document.createElement('td');
  cartItems.appendChild(orderName);
  orderName.innerText = localStorage.getItem('order', name);
  var orderQty = document.createElement('td');
  cartItems.appendChild(orderQty);
  orderQty.innerText = localStorage.getItem('order', qty);
};

function deleteOrder () {
  event.preventDefault();
  localStorage.setItem('order', JSON.stringify('order', ' '));
  yourCart();
}

var delete = document.getElementById('delete button...or whatever we call it');
form.addEventListener('submit', deleteOrder);
