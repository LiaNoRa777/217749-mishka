var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var headerSearch = document.querySelector(".page-header__search");
var headerCart = document.querySelector(".page-header__cart");
var topProductOrder = document.querySelector(".top-product__button");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var addToCart = document.querySelectorAll(".product__add");

navMain.classList.remove("main-nav--nojs");
headerSearch.classList.add("page-header__search--closed");
headerCart.classList.add("page-header__cart--closed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    headerSearch.classList.remove("page-header__search--closed");
    headerCart.classList.remove("page-header__cart--closed");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    headerSearch.classList.add("page-header__search--closed");
    headerCart.classList.add("page-header__cart--closed");
  }
});

topProductOrder.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("overlay--show");
});

for (var i = 0; i < addToCart.length; i++) {
  var btnCart = addToCart[i];
  btnCart.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
}

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===  27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
