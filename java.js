// Variables globales
var cartItems = [];
var cartList = document.getElementById('cart-list');
var cartTotalElement = document.getElementById('cart-total');
var successMessage = document.getElementById('success-message');
var cartNotificationCount = document.querySelector('.cart-notification-count');
var cartIcon = document.querySelector('.cart-icon');

// Función para agregar un producto al carrito
function addToCart(event) {
  var productName = event.target.getAttribute('data-name');
  var productPrice = parseFloat(event.target.getAttribute('data-price'));

  // Crea un elemento de lista para el producto agregado
  var cartItem = document.createElement('li');
  cartItem.textContent = productName + ' - $' + productPrice.toFixed(2);

  // Agrega el producto al carrito
  cartList.appendChild(cartItem);

  // Mueve el producto al lado del carrito
  event.target.closest('.product').classList.add('added-to-cart');

  // Agrega el producto al array del carrito
  var item = { name: productName, price: productPrice };
  cartItems.push(item);

  // Actualiza el carrito
  updateCart();
}

// Función para actualizar el carrito
function updateCart() {
  var totalPrice = 0;
  var cartListItems = ""; // Variable para almacenar los elementos de lista del carrito

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    totalPrice += parseFloat(item.price);

    // Crear un elemento de lista para el producto agregado
    cartListItems += "<li>" + item.name + " - $" + item.price.toFixed(2) + "</li>";
  }

  cartTotalElement.textContent = 'Total: $' + totalPrice.toFixed(2);

  // Mostrar los productos en la lista del carrito
  cartList.innerHTML = cartListItems;

  // Actualizar el contador de notificaciones del carrito
  cartNotificationCount.textContent = cartItems.length;

  // Mostrar la notificación del carrito
  showCartNotification();
}

// Función para mostrar la notificación del carrito
function showCartNotification() {
  cartNotificationCount.style.display = 'block';
  cartNotificationCount.classList.add('cart-notification');
}

// Función para ocultar la notificación del carrito
function hideCartNotification() {
  cartNotificationCount.style.display = 'none';
  cartIcon.classList.remove('cart-notification');
}

// Función para finalizar la compra
function checkout() {
  // Lógica para procesar el pago y realizar otras acciones necesarias
  // ...

  // Mostrar el mensaje de compra exitosa
  successMessage.style.display = 'block';

  // Limpiar el carrito después de finalizar la compra
  cartItems = [];
  updateCart();

  // Ocultar el mensaje después de unos segundos
  setTimeout(function () {
    successMessage.style.display = 'none';
  }, 3000);
}

// Evento de carga del DOM
document.addEventListener('DOMContentLoaded', function () {
  // Agregar event listeners a los botones de "Agregar al carrito"
  var addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', addToCart);
  });

  // Agregar event listener al botón de "Finalizar Compra"
  var checkoutButton = document.getElementById('checkout-btn');
  checkoutButton.addEventListener('click', checkout);
});

//accion del boton//
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")
                    }
                      );