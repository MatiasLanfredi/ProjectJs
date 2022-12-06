// const array1 = [1, 2, 3];

// const pets = ['cat', 'dog', 'bat', 'matiaslanfredia@gmail.com'];

// let x = "matiaslanfredia@gmail.com";

// console.log(x);

// if (pets.includes(x)) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let x = 0;
// let y = 1;
// console.log(array1.length - 4);

// el q entra primero es el que tiene menor delay de segundos
// setTimeout(() => {
//     console.log("Inicio");
// }, 3000);

// setTimeout(() => {
//     console.log("Intermedio");
// }, 2000);

// setTimeout(() => {
//     console.log("Final");
// }, 1000);

// const botonselect = document.getElementById("bottonselect");
// const botonarticle = document.getElementById("article").value
// const botoninfo = document.getElementById("info").value
// const botonpost = document.getElementById("post").value

// botonselect.addEventListener('click', fondo);

// function fondo() {

//     console.log(botonselect.value);

//     switch (botonselect.value) {
//         case "Article":
//             document.body.style.backgroundColor = "red"
//             break;
//         case "Post":
//             document.body.style.backgroundColor = "blue"
//             break;
//         case "info":
//             document.body.style.backgroundColor = "green"
//             break;
//     }
// }

// let container = document.getElementById("container");

// fetch("../../data.json")
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(product => {
//             const div = document.createElement("div");
//             div.innerHTML += `
//             <img src="${product.imagen}" alt="${product.name}">
//             <h2>${product.title} </h2>

//             <h5>${product.price} </h5>
//             `;

//             container.append(div)
//         });
//     })
const myArray = [
    { "id": "asd", "name": "Alice" },
    { "id": 2, "name": "Peter" },
    { "id": 3, "name": "Harry" }
];

// Get the Array item which matchs the id "2"
const result = myArray.find(item => item.id === "asd");

console.log(result.name);  // Prints: Peter