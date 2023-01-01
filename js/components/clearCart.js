import { setItems } from "./cart.mjs";
import { totalCost } from "./cart.mjs";
//clear cart
// export function clearCart() {
//     const clearCartBtn = document.querySelector('.clear-cart-btn');
//     let cartItems = localStorage.getItem("productsInCart");
//     let cartCost = localStorage.getItem("totalCost");
//     cartItems = JSON.parse(cartItems);

//     clearCartBtn.addEventListener("click", () => {
//         if (confirm("Are you sure you want to clear the cart?") === true) {
//             localStorage.clear();
//             cartCost = 0;
//             location.reload();
//         }


//   });
// }



//  //   ================================ DELETE LISTING =================
//   const sellDelete = document.getElementById("deleteListingBtn");

//   sellDelete.addEventListener("click", () => {
//     if (confirm("Are you totally sure?")) {
//       deletePost(auctions.id);
//     }
//   });


// function ask() {
//     if (confirm('Clear localStorage?') == true) {
//     localStorage.clear()
//     location.reload()
//     }
//     else {
//     alert('Nothing happend')
//     }
//     }
//     }


        // if (document.querySelector(".cart-footer") !== null) {
        // document.querySelector(".cart-footer").remove();
        // }
        // addtocartbtnDom.innerText = "Add to cart";
        // addtocartbtnDom.disabled = false;



        // EXAMPLE OF BUTTON ADD CLASS
        // button.classList.add("added")
// `const buttons = document.querySelectorAll("button");
//     buttons.forEach(function(button){
//         button.onclick = (function(event) {
//         button.classList.add("added")         
//             cartArray.push(event.target.dataset.product)
//             const itemToAdd = iceCreams.find(item => Number(item.id) === Number(event.target.dataset.product));
//             console.log(cartArray)

//             let items = load("cartList");
            
//             console.log(itemToAdd);
//             items.push(itemToAdd);
        
//             localStorage.setItem("cartList", JSON.stringify(items));
//         });
//     });