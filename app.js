'use strict';

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
var dogDuck = new Product ('dog-duck', 'img/dog-duck.jpg', 'dogDuck');
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


if (localStorage.getItem('name')) {
  orderArrayName = JSON.parse(localStorage.getItem('name'));
  orderArrayQty = JSON.parse(localStorage.getItem('qty'));
} else {
  var orderArrayName = [];
  var orderArrayQty = [];
};

// var form = document.getElementById('form');
// form.addEventListener('submit', createOrder);

function createOrder (event) {
  event.preventDefault();
  // var newOrder = new Order;
  var name = form.elements['product'].value;
  var qty = parseInt(form.elements['quantity'].value);
  orderArrayName.push(name);
  orderArrayQty.push(qty);
  localStorage.setItem('name', JSON.stringify(orderArrayName));
  localStorage.setItem('qty', JSON.stringify(orderArrayQty));
  // showCart();
  // yourCart();
  form.reset();
}

//works to here!!
// to change a cart button to show things in cart
// function showCart () {
//   var cartIcon = document.getElementById('the button');
//   var text = JSON.parse(localStorage.getItem('order', qty));
//   cartIcon.innerText = text;
// };

function yourCart () {
  var cartItems = document.getElementById('theTable');
  var purchaseItem = JSON.parse(localStorage.getItem('name', orderArrayName));
  for (var i = 0; i < purchaseItem.length; i++) {
    var orderSummary = document.createElement('tr');
    cartItems.appendChild(orderSummary);
    var orderImage = document.createElement('td');
    // orderImage.innerText = 'put picture here';
    orderSummary.appendChild(orderImage);
    for (var j = 0; j < productList.length; j++) {
      if (productList[j].name === purchaseItem[i]) {
        var image = document.createElement('img');
        orderImage.appendChild(image);
        image.src = productList[j].path;
      }
    }
    var orderName = document.createElement('td');
    orderSummary.appendChild(orderName);
    // orderName.innerText = JSON.parse(localStorage.getItem('name', orderArrayName[0]));
    orderName.innerText = purchaseItem[i];
    var orderQty = document.createElement('td');
    orderSummary.appendChild(orderQty);
    var purchaseQty = JSON.parse(localStorage.getItem('qty', orderArrayQty));
    orderQty.innerText = purchaseQty[i];
    var buttonTd = document.createElement('td');
    orderSummary.appendChild(buttonTd);
    var button = document.createElement('button');
    buttonTd.appendChild(button);
    button.innerText = 'Delete Item';
  }
};
yourCart();
// console.log(orderArray);

// function deleteOrder () {
//   event.preventDefault();
//   localStorage.setItem('order', JSON.stringify('order', ' '));
//   yourCart();
// }
//
// var delete = document.getElementById('delete button...or whatever we call it');
// form.addEventListener('submit', deleteOrder);
