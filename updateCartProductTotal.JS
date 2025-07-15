import { getCartProductFromLS } from "./getCartProducts.js"

export const updateCartProductTotal = () => {

    let productsubTotal = document.querySelector(".productSubTotal");
    let productfinalTotal = document.querySelector(".productFinalTotal");

    


    let localCartProducts = getCartProductFromLS();
    let initialvalue = 0 ;
    let totalProductprice = localCartProducts.reduce((accum , curElem) => {
     let productPrice  = parseInt(curElem.price) || 0 ;

     return accum + productPrice;
    },initialvalue)

    
    productsubTotal.textContent = `₹${totalProductprice}`
    productfinalTotal.textContent = `₹${totalProductprice + 50}`


    
}