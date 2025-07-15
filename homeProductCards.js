
import { homeQuantityToggle } from "./homeQuantityToggle.js";

import { addToCart } from "./addToCart.js";


const productContainer = document.querySelector("#productContainer");

const productTemplate = document.querySelector("#productTemplate")




export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }

     products.forEach((curProd) => {

     const { id, name ,category,description , brand , image , price , stock } = curProd ;

        const productClone =  document.importNode(productTemplate.content, true);


        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
 


        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent =  ` ₹${price}` ;
        productClone.querySelector(".productActualPrice").textContent = `₹${price*4}`;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".category").textContent = brand;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productImage").src = image;



        
 

          
        productClone.querySelector(".stockElement").addEventListener("click",(event)=> {
             homeQuantityToggle(event , id,stock);
        });





        productClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=> {

            addToCart(event,id,stock);
        })









        productContainer.append(productClone);

        } );

    
};








































// ## Step 5: Destructuring Product Properties

// - Destructure the properties of each product object (brand, category, description, et
// for easier access.

// ## Step 6: Cloning the Template

// - Use `document. importNode()" to clone the template container for each product.

// ## Step 7: Updating Product Information

// - Update the cloned with the product details: - Set the text content of elements to display product information. - Set the source attribute of the product image element.