// function removeCartItem(id) {
//     let cartItems = localStorage.getItem("productsInCart");
//     let cartButtons = document.querySelectorAll(".add-cart");
//     //  change buttons on click
//   cartButtons.forEach(function (cartButton) {
//     cartButton.onclick = function (event) {
//       cartButton.classList.add("added");
//     }

//     if(cartItems != null) {
  
//         let iceCream = cartItems[i];
//         if(cartButton.classList.contains("added")) {
//           cartButton.onclick = function (event) {
//             delete iceCream[i];
//             cartButton.classList.remove("added")
//           }
//       }
//     }
//   })
// }