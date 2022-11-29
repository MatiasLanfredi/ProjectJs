const productsInCart = JSON.parse(localStorage.getItem("productsCart"));

console.log(productsInCart);
const legendEmpty = document.getElementById("legendEmpty");
const containerProducts = document.getElementById("containerProducts");
const buyCart = document.getElementById("buyCart");
const operationsButton = document.getElementById("operationsButton");
const productButtonsDelete = document.querySelectorAll("cart__container__products__content__card-deleteButton")


function loadProductsCart() {
    if (productsInCart) {

        productsInCart.forEach(product => {

            containerProducts.innerHTML += `
            <div class="cart__container__products__content__card">
                <div class="cart__container__products__content__card-flex">
                    <picture>
                        <img src="${product.imagen}" alt="${product.title}">
                    </picture>
                    <div class="cart__container__products__content__card-title">
                        <h4>Course: ${product.title}</h4>
                        <p>By Autor</p>
                    </div>
                    <div class="cart__container__products__content__card-price">
                      <h4>Price:</h4>
                      <p>${product.price} </p>
                    </div>
                    <button id="${product.id}" class="cart__container__products__content__card-deleteButton">
                    <i class="uil uil-trash-alt"></i>
                    </button>
                </div>
            </div>`;

        });
    } else {
        containerProducts.innerHTML = `<p id="legendEmpty">Your cart is empty😔</p> `
    }
    deleteCartButtons();
}

loadProductsCart();



function deleteCartButtons() {

    let deleteButtons = document.querySelectorAll("cart__container__products__content__card-deleteButton");

    deleteButtons.forEach(button => { // add event 
        button.addEventListener('click', deleteCart(e));
    })
}


function deleteCart(e) {
    let idButton = e.currentTarget.id;
    console.log(idButton);


}


