let shoppingCartArray = [];
let totalProductsArray = [];
let total = 0;
let totalElement = document.querySelector(".cart-total-price");
let productContainer = document.querySelector("#shopContainer");
let titleContainer = document.getElementById("titleContainer");
let productsFilter;
let productsLS = [];
let productsLSArray = [];
let cartContainer = document.getElementById("cart-item");


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
      totalProductsArray.push(product);
    });

    let addBtns = document.querySelectorAll(".container__shop__products__card-details-content-button")

    addBtns = [...addBtns];

    addBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          iconColor: '#fff',
          color: '#fff',
          title: 'Product added succesfully🎉',
          background: '#A5DC86',
          html: '<a style = color:white border:1px solid white href="#shoppingCart"><strong>Go to cart<strog></a>',

        })
        //ADD PRODUCTS TO CART

        //search products's ID
        shoppingCartArray = JSON.parse(localStorage.getItem("products-cart")) || [];

        let actualID = e.currentTarget.id;

        let actualProductFromList = productsArray.find(item => item.id === actualID);

        let actualProduct = shoppingCartArray.find(item => item.id === actualID);


        let flag = false;


        shoppingCartArray.forEach(product => {
          if (actualID == product.id) {
            flag = true;
          };
        });

        if (flag) {
          actualProduct.quantity++
        } else {
          shoppingCartArray.push({
            ...actualProductFromList,
            quantity: 1,
          });
        };

        localStorage.setItem("products-cart", JSON.stringify(shoppingCartArray));

        drawItems();

        getTotal();

        updateNumberItems();

        removeItems();
      });
    });
  });

getTotal();

drawItems();

function drawItems() {

  productsLS = JSON.parse(localStorage.getItem("products-cart"));
  cartContainer.innerHTML = ' ';

  productsLS.forEach(product => {
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
  productsLS = JSON.parse(localStorage.getItem("products-cart"));
  let sumTotal;
  let total = productsLS.reduce((sum, item) => {
    sumTotal = sum + (item.quantity * item.price)
    return sumTotal;
  }, 0)
  totalElement.innerText = `$${total}`
};

function updateNumberItems() {

  shoppingCartArray = JSON.parse(localStorage.getItem("products-cart"));

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

  shoppingCartArray = JSON.parse(localStorage.getItem("products-cart"));

  let removeBtns = document.querySelectorAll(".btm-danger");

  removeBtns = [...removeBtns];

  removeBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      //catch title product
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btm-success',
          cancelButton: 'btm-cancel'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          let actualProductTitle = event.target.parentElement.parentElement.childNodes[1].innerText;
          //search object with that title
          let actualProductObject = shoppingCartArray.find(item => item.title === actualProductTitle);
          //remove from array
          shoppingCartArray = shoppingCartArray.filter(item => item != actualProductObject);

          localStorage.setItem("products-cart", JSON.stringify(shoppingCartArray));

          console.log(shoppingCartArray);

          //update total price 
          drawItems()
          getTotal()
          updateNumberItems()
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    });
  });
}

let buttonCategory = document.querySelectorAll(".button-category");

buttonCategory = [...buttonCategory]

buttonCategory.forEach(btn => {

  btn.addEventListener('click', (event) => {

    buttonCategory.forEach(btn => btn.classList.remove("active"));

    event.currentTarget.classList.add("active");

    switch (event.currentTarget.id) {
      case 'all':
        titleContainer.innerHTML = "<h1>All Products✨</h1>"
        break;
      case 'webdevelopment':
        titleContainer.innerHTML = "<h1>Web Development💻</h1>"
        productsFilter = totalProductsArray.filter(product => product.category.id == event.currentTarget.id);
        console.log(productsFilter);
        drawItems(productsFilter);
        break;
      case 'datascience':
        titleContainer.innerHTML = "<h1>Data Science📊</h1>"
        productsFilter = totalProductsArray.filter(product => product.category.id == event.currentTarget.id);
        console.log(productsFilter);
        break;
      case 'softwareenginneering':
        titleContainer.innerHTML = "<h1>Software Engineering💡</h1>"
        productsFilter = totalProductsArray.filter(product => product.category.id == event.currentTarget.id);
        console.log(productsFilter);
        break;
    }

    // if (event.currentTarget.id != "all") {
    //   const productsFilter = products.filter(product => product.category.id === event.currentTarget.id)
    //   drawItems(productsFilter);
    // } else {
    //   drawItems(products)
    // }

  })
})

/* ==============PRDOCUTS CART LOADED ================= */

// productsLS = JSON.parse(localStorage.getItem("products-cart"));

// console.log(productsLS);

// productsLS.forEach(product => {
//   cartContainer.innerHTML += `
//   <div class="cart-row">
//   <div class="cart-item cart-column">
//       <img class="cart-item-image" src="${product.imagen}" width="100" height="100">
//       <span class="cart-item-title">${product.title}</span>
//   </div>
//   <span class="cart-price cart-column">$${product.price}</span>
//   <div class="cart-quantity cart-column">
//       <input class="cart-quantity-input" min="1" type="number" value="${product.quantity}">
//       <button class="btm btm-danger" type="button">REMOVE</button>
//   </div>
// </div>`
// });