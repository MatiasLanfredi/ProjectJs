
'use strict';
/*=============================VARIABLES=====================================*/
const shopContainer = document.getElementById("shopContainer");
const titleContainer = document.getElementById("titleContainer");
const articlesNumber = document.getElementById("articlesNumber");
let productsCart = [];

const buttonsCategory = document.querySelectorAll(".button-category");
/*============================== MAIN CODE ========================================*/

loadProducts(products);
titleContainer.innerHTML = "All Products✨"

/* ADD EVENT TO BUTTON FOR A FILTER BY TYPE OF COURSE*/
buttonsCategory.forEach(button => {
  button.addEventListener('click', (e) => {

    buttonsCategory.forEach(button => button.classList.remove("active"))

    e.currentTarget.classList.add("active")

    if (e.currentTarget.id != "all") {

      const productCategory = products.find(product => product.category.id === e.currentTarget.id);

      switch (productCategory.category.name) {
        case "Webdevelopment":
          titleContainer.innerText = "Web Development💻";
          break;
        case "Datascience":
          titleContainer.innerText = "Data Science📊";
          break;
        case "Softwareenginneering":
          titleContainer.innerText = "Software Engineering🧱";
          break;
      }

      const productsFilter = products.filter(product => product.category.id === e.currentTarget.id);
      loadProducts(productsFilter);

    } else {
      titleContainer.innerHTML = "All Products✨"
      loadProducts(products);
    }
  })
});

/*============================= ******FUNCTIONS SECTION****** ===========================*/
function loadProducts(showProducts) {
  shopContainer.innerHTML = "";

  showProducts.forEach(product => {

    const div = document.createElement("div");
    div.classList.add("container__shop__products__card");
    div.innerHTML = `
    <picture>
    <img src="${product.imagen}" alt="${product.title}" />
    </picture>
    <div class="container__shop__products__card-details">
    <div class="container__shop__products__card-details-content">
    <h4>${product.title}</h4>
    <p class="container__shop__products__card-details-content-txt">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolores laudantium rerum dolorum, nostrum quos fugiat totam
    </p>
    <p class="container__shop__products__card-details-content-price">
    $<span>${product.price}</span>
    </p>
    <button class="container__shop__products__card-details-content-button" id="${product.id}">
    Agregar <i class="uil uil-shopping-cart"></i>
    </button>
    </div>
    </div>
    `
    shopContainer.append(div);
  })

  addtoCartButtons();
}
function addtoCartButtons() {

  let addButtons = document.querySelectorAll(".container__shop__products__card-details-content-button");

  addButtons.forEach(button => { // add event 
    button.addEventListener('click', addToCart);
  })
}
let productinCart;
let productCartinJsonLS = localStorage.getItem("productsCart")
//const productCartinJsonLS = JSON.parse(localStorage.getItem("productsCart"));
if (productCartinJsonLS) {
  productinCart = JSON.parse(productCartinJsonLS);
  UpdateNumberCart();
} else {
  productsCart = [];
}

function addToCart(e) {

  const idButton = e.currentTarget.id;
  const addedProduct = products.find(product => product.id === idButton);

  if (productsCart.some(product => product.id === idButton)) {
    const indexProductArray = productsCart.findIndex(product => product.id === idButton)
    productsCart[indexProductArray].quantity++;
  } else {
    addedProduct.quantity = 1;
    productsCart.push(addedProduct);
  }

  UpdateNumberCart();

  localStorage.setItem("productsCart", JSON.stringify(productsCart));
}

function UpdateNumberCart() {
  let articlesNumberCart = productsCart.reduce((acc, product) => acc + product.quantity, 0);
  articlesNumber.innerHTML = articlesNumberCart;
}


