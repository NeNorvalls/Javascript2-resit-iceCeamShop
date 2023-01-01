import { iceCreams } from "../data/ice-creams.js" ;
// import { removeItemFromCart } from "./removeFromCart.mjs";


let cartButtons = document.querySelectorAll(".add-cart");

let products = iceCreams;

for (let i=0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })

  //  change buttons on click

  cartButtons.forEach(function (cartButton) {
    cartButton.onclick = function (event) {
      cartButton.classList.add("added");
    }
    let cartItems = localStorage.getItem("productsInCart");
    if(cartItems != null) {
      for (let i = 0; i < cartItems.length; i++) {
  
        // let iceCream = cartItems[i];
        if(cartButton.classList.contains("added")) {
          cartButton.onclick = function (event) {
            delete products[i];
            localStorage.setItem("cartNumbers", productNumbers - 1);
            document.querySelector(".cart span").textContent = productNumbers - 1;
            cartButton.classList.remove("added");
          }
          // cartButton.onclick("click", () => {
          //   delete iceCream[i];
          //   cartButton.classList.remove("added")
          // })
        } 
      }
    }
  })
}
 // display number of items in cart 
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if(productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  // console.log("The product clicked is", product);
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseFloat(productNumbers);

  if(productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  console.log(productNumbers);

  setItems(product);
}


export function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {

    if(cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product
      }
    }
  } else {
    cartItems = {
      [product.name]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

export function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  console.log("My cartCost is", cartCost);
  console.log(typeof cartCost);

  if(cartCost != null) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}



onLoadCartNumbers();
displayCart();


export function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  let cartCost = localStorage.getItem("totalCost");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");



  if(cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <button><ion-icon class="remove-btn" name="close-circle"></ion-icon></button>
        <span>${item.name}</span>
      </div>
      <div class="price-cart">${item.price}.00kr</div>
      <div id="demo"></div>
      `;
    });


    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">Basket Total</h4>
        <h4 class="basketTotal">${cartCost}.00kr</h4>
      </div>
    `

    productContainer.innerHTML += `
    <button class="clear-cart-btn">Clear cart</button>
    `


// =============== Clear the cart ================
      const clearCartBtn = document.querySelector('.clear-cart-btn');
      clearCartBtn.addEventListener("click", () => {
          if (confirm("Are you sure you want to clear the cart?") === true) {
              localStorage.clear();
              cartCost = 0;
              location.reload();
          }
  
    });

    function updateCart() {
      displayCart();
      setItems();

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      location.reload();
    }

    // remove item from cart
    let removeCartItemButtons = document.querySelectorAll(".remove-btn");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
      let button = removeCartItemButtons[i];
      button.addEventListener("click", () => {
        if (confirm("Are you sure you want to remove this item?") === true) {
          for (let i in cartItems) {
            if(cartItems != null) {
              localStorage.removeItem("productsInCart", cartItems[i]);
              localStorage.removeItem("totalCost");
              localStorage.removeItem("cartNumbers", cartItems[i]);
            } else {
              document.getElementById("demo").innerHTML = "cart is empty";
            }
          }
        } updateCart();
      })
    }
  } 
};


