let shoppingCartArray = [];
let total = 0;
let totalElement = document.querySelector(".cart-total-price");
let productContainer = document.querySelector("#shopContainer");
//=>
fetch("../../data.json")
  .then(response => response.json())
  .then(productsArray => {
    productsArray.forEach(product => {
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
      productContainer.append(div);
    });

    let addBtns = document.querySelectorAll(".container__shop__products__card-details-content-button")

    addBtns = [...addBtns];

    let cartContainer = document.querySelector(".cart-items");

    addBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        console.log(e);
        //ADD PRODUCTS TO CART

        //search products's ID
        let actualID = e.currentTarget.id;

        let actualProduct = productsArray.find(item => item.id === actualID);

        if (actualProduct.quantity === undefined) {
          actualProduct.quantity = 1;
        }
        let flag = false;

        shoppingCartArray.forEach(product => {
          if (actualID == product.id) {
            flag = true;
          };
        });
        if (flag) {
          actualProduct.quantity++
        } else {
          shoppingCartArray.push(actualProduct);
        };

        drawItems();

        getTotal();

        updateNumberItems();

        removeItems();
      });
    });
  });

function drawItems() {
  let cartContainer = document.getElementById("cart-item");
  cartContainer.innerHTML = ' ';

  shoppingCartArray.forEach(product => {
    cartContainer.innerHTML += `
    <div class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${product.imagen}" width="100" height="100">
        <span class="cart-item-title">${product.title}</span>
    </div>
    <span class="cart-price cart-column">$${product.price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" min="1" type="number" value="${product.quantity}">
        <button class="btm btm-danger" type="button">REMOVE</button>
    </div>
</div>`

  });
  removeItems();
}

function getTotal() {
  let sumTotal;
  let total = shoppingCartArray.reduce((sum, item) => {
    sumTotal = sum + (item.quantity * item.price)
    return sumTotal;
  }, 0)
  totalElement.innerText = `$${total}`
};


function updateNumberItems() {
  let inputNumber = document.querySelectorAll('.cart-quantity-input');

  inputNumber = [...inputNumber];

  inputNumber.forEach(item => {
    item.addEventListener('click', (event) => {
      //catch title product
      let actualProductTitle = event.target.parentElement.parentElement.childNodes[1].innerText;

      let actualProductQuantity = parseInt(event.target.value);
      //search object with that title
      let actualProductObject = shoppingCartArray.find(item => item.title === actualProductTitle);
      //update total price 
      actualProductObject.quantity = actualProductQuantity;

      getTotal();
    });
  });

};

function removeItems() {
  let removeBtns = document.querySelectorAll(".btm-danger");

  removeBtns = [...removeBtns];

  removeBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      //catch title product
      let actualProductTitle = event.target.parentElement.parentElement.childNodes[1].innerText;
      //search object with that title
      let actualProductObject = shoppingCartArray.find(item => item.title === actualProductTitle);
      //remove from array
      shoppingCartArray = shoppingCartArray.filter(item => item != actualProductObject);
      console.log(shoppingCartArray);
      //update total price 
      drawItems()
      getTotal()
      updateNumberItems()
    });
  });
}