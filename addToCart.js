import {  updateCartValue } from "./updateCartValue.js";

import {  getCartProductFromLS} from "./getCartProducts.js"

getCartProductFromLS();

export const addToCart = (event, id, stock) => {






  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);

  if (!currentProdElem) {
    console.error(`Product card with ID card${id} not found`);
    return;
  }

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;


  price = Number(price.replace("₹", ""));
   
   let existingProd = arrLocalStorageProduct.find(
    (curProd)=> curProd.id === id 
    ) ;

  if(existingProd && quantity > 1 ){

     quantity = Number(existingProd.quantity) + Number(quantity) ;
     price = Number(price * quantity);

     let  updatedCart  = {id,quantity,price}

      updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
     });

     localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    }










    if(existingProd){
      // alert("helo world")
    return false;
  }

   price = Number( price * quantity);
   quantity = Number(quantity);
  

  // if (!quantity || !price) {
  //   console.error("Missing quantity or price element");
  //   return;
  // }

  // Optional: Check for existing product and update instead of pushing duplicate
  // const existingProduct = arrLocalStorageProduct.find(() => item.id === id);

  
  // let updte crt
  arrLocalStorageProduct.push({ id, quantity, price});
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


//update the cart value 
updateCartValue(arrLocalStorageProduct);
 



};









//  import{ getCartProductFromLS } from "./productsFromLS.js";



//  export const addToCart = (event,id,stock) => {

//   let arrLocalStorageProduct =  getCartProductFromLS();


//   const currentProdElem = document.querySelector(`#card${id}`);

//   let quantity = currentProdElem.querySelector('.productQuantity').innerText;
//   let price = currentProdElem.querySelector(".productPrice").innerText;
  
//   price = price.replace('₹','');
//   price = price * quantity;
//   quantity = Number(quantity);
//   console.log(price,quantity);

  
//   arrLocalStorageProduct.push({ id , quantity , price });
//   localStorage.setItem("cartProductLS" , JSON.stringify(arrLocalStorageProduct));


// }