import { iceCreams } from "../data/ice-creams.js" ;


let cartButtons = document.querySelectorAll(".add-cart");

let products = iceCreams;

for (let i=0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);

  })

  //  change buttons on click
  // cartButtons.forEach(function (cartButton) {
  //     cartButton.onclick = function (event) {
  //       this.classList.toggle("added");

  //   }
  // })

}
const addButtons = document.querySelectorAll(".cart-button");

addButtons.forEach((addButton) => {
  addButton.addEventListener("click", handleClick);
})

function handleClick() {
  this.classList.toggle("added");
  this.classList.toggle("add");
  this.classList.toggle("remove")
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
        <button id="removeBtn" class="remove-btn-${item.name}"><ion-icon name="close-circle"></ion-icon></button>
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
  } 
}




