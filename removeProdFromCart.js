import { getCartProductFromLS } from "./getCartProducts.js"
import { updateCartValue } from "./updateCartValue.js";

export const  removeProdFromCart = (id) => {
   let  cartProducts = getCartProductFromLS();
   cartProducts = cartProducts.filter((curProd) => curProd.id !== id)
  

   // update the local storage after removing the item 
   localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
   
   // to remove the div onclick
   let removeDiv = document.getElementById(`card${id}`);
   if(removeDiv){
    removeDiv.remove();
   }

updateCartValue(cartProducts);
   
}