// Variables globales
var cartItems = []; // Array para almacenar los elementos agregados al carrito

// Función para agregar un producto al carrito
function addToCart(productName, price) {
  var item = { name: productName, price: price };
  cartItems.push(item);
  updateCart();
}

// Función para actualizar el carrito
function updateCart() {
  var cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Limpiar la lista del carrito antes de actualizar

  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    var listItem = document.createElement("li");
    listItem.textContent = item.name + " - $" + item.price;
    cartList.appendChild(listItem);

    totalPrice += parseFloat(item.price);
  }

  var totalElement = document.getElementById("cart-total");
  totalElement.textContent = "Total: $" + totalPrice.toFixed(2);
}

// Función para finalizar la compra
function checkout() {
  // Lógica para procesar el pago y realizar otras acciones necesarias
  // ...

  // Limpiar el carrito después de finalizar la compra
  cartItems = [];
  updateCart();
}

// Evento de carga del DOM
document.addEventListener("DOMContentLoaded", function() {
  updateCart(); // Actualizar el carrito al cargar la página

  // Agregar event listeners a los botones de "Agregar al carrito"
  var addToCartButtons = document.getElementsByClassName("add-to-cart");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", function(event) {
      var productName = event.target.dataset.name;
      var price = event.target.dataset.price;
      addToCart(productName, price);
    });
  }

  // Agregar event listener al botón de "Finalizar Compra"
  var checkoutButton = document.getElementById("checkout-btn");
  checkoutButton.addEventListener("click", checkout);
});

// cALCULADORA //
let resultField = document.getElementById("result");
let result = "";

function appendNumber(number) {
  result += number;
  resultField.value = result;
}

function appendOperator(operator) {
  result += " " + operator + " ";
  resultField.value = result;
}

function calculate() {
  try {
    result = eval(result);
    resultField.value = result;
  } catch (error) {
    resultField.value = "Error";
  }
}

function clearResult() {
  result = "";
  resultField.value = result;
}