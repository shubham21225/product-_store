const cartValue = document.querySelector("#cartValue");
 export const updateCartValue = (cartProducts) => {
    //    console.log(CartProduct)
    return cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping" > ${cartProducts.length}</i>`

}