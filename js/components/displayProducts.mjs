import { default as iceArray } from "../data/ice-creams.js";

const iceCreamContainer = document.querySelector(".ice-creams");

export const displayIceCream = iceArray.map((iceCream, index) => {
  return (`
    
    <div class="col-lg-4 col-md-6 col-sm-12 card" style="background-color: ${iceCream.colour};">
            <div class="card-body d-flex">
                <h4 class="card-title">${iceCream.name}</h4>
                <p class="card-desc">Flavours: ${iceCream.flavours}</p>
                <div class="price-container">
                  <span class="price">Price: ${iceCream.price}kr</span>
                </div>
                <button class="cart-button add-cart" data-product=${iceCream.id}></button>
                
            </div>
    </div>`);
});
console.log(iceArray);
iceCreamContainer.innerHTML = displayIceCream.join("");
