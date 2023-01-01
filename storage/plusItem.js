// increase item in cart
cartItemDom
  .querySelector('[data-action="increase-item"]')
  .addEventListener("click", () => {
    cart.forEach((cartItem) => {
      if (cartItem.name === product.name) {
        cartItemDom.querySelector(".cart_item_quantity").innerText =
          ++cartItem.quantity;
        cartItemDom.querySelector(".cart_item_price").innerText =
          parseInt(cartItem.quantity) * parseInt(cartItem.price) + " Rs.";
        cartTotal += parseInt(cartItem.price);
        document.querySelector(".pay").innerText = cartTotal + " Rs.";
      }
    });
  });
