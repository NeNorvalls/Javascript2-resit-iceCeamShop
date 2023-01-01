//clear cart
document
  .querySelector('[data-action="clear-cart"]')
  .addEventListener("click", () => {
    cartItemDom.remove();
    cart = [];
    cartTotal = 0;
    if (document.querySelector(".cart-footer") !== null) {
      document.querySelector(".cart-footer").remove();
    }
    addtocartbtnDom.innerText = "Add to cart";
    addtocartbtnDom.disabled = false;
  });

document
  .querySelector('[data-action="check-out"]')
  .addEventListener("click", () => {
    if (document.getElementById("paypal-form") === null) {
      checkOut();
    }
  });
