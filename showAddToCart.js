
import { products } from "./products.js";
import { getCartProductFromLS } from "./getCartProducts.js";
import { fetchQantityfromLs } from "./fetchQantityfromLs.js";
import { removeProdFromCart } from "./removeProdFromCart.js";

import { incrimentDecriment } from "./incrimentDecriment.js";

let cartProducts =getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  return  cartProducts.some((curElem) => curElem.id === curProd.id)
})

console.log(filterProducts);



const cartElement = document.querySelector('#productContainer');
const templateContainer = document.querySelector("#productCartTemplate");



const showCartProduct = ()=> {
    // console.log("hello world")

    filterProducts.forEach((curProd) => {
      
        const{ id , name, image , stock ,price , brand } = curProd;

        let productClone = document.importNode( templateContainer.content, true);

        const LsActulData = fetchQantityfromLs(id,price);





        productClone.querySelector(".category").textContent = brand;
        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`)
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector('.productName').textContent = name;

        
        productClone.querySelector('.productQuantity').textContent = LsActulData.quantity;
        productClone.querySelector('.productPrice').textContent = LsActulData.price;


       // hndle incriemnt nd decrimnt button
       productClone.querySelector(".stockElement").addEventListener("click", (event) => {
        incrimentDecriment(event, id , stock, price);
       })   







        productClone.querySelector(".remove-to-cart-button").addEventListener('click', () => removeProdFromCart(id) );


        cartElement.appendChild(productClone)
        
    });
 
};

showCartProduct(); 








