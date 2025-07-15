import { updateCartValue } from "./updateCartValue.js";

 export  const getCartProductFromLS = () => {
    // console.log("get cart is working");

    let cartProducts = localStorage.getItem("cartProductLS");

    if (!cartProducts) {
      return [];
    }
     
   
     
    cartProducts  = JSON.parse(cartProducts);

    updateCartValue(cartProducts);

    return cartProducts;


  };