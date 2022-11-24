'use strict';
/*==========VARIABLES=========*/

const containerLoginRegister = document.querySelector(".container__login-register")
const formularioLogin = document.querySelector(".form__login");
const formularioRegister = document.querySelector(".form__register");
const backLogin = document.querySelector(".container__back-login");
const backRegister = document.querySelector(".container__back-register");
const checkButton = document.getElementById("show-password");
const checkButton2 = document.getElementById("show-password2");


/*==========  MAIN CODE  =========*/


document.getElementById("btn__register").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", login);

window.addEventListener("resize", widthPage);


checkButton.addEventListener("click", showpassword);

checkButton2.addEventListener("click", showpassword2);

const usuarioEnJson = JSON.parse(localStorage.getItem('user'));



/* ============FORM LOGIN============= */

const iniciarSesion = document.getElementById("iniciar-sesion");

iniciarSesion.addEventListener("click", function (e) {
    e.preventDefault()
    signup(usuarioEnJson)
});

/* ============FORM REGISTER ============= */

const registerBoton = document.getElementById("register-button");

registerBoton.addEventListener('click', function (e) {
    e.preventDefault();
    registro();
});

/*========== FUNCIONES ==============*/

function registro() {

    const nameUserNew = document.getElementById("nombre-register").value;
    const emailUserNew = document.getElementById("email-register").value;
    const usuarioUserNew = document.getElementById("user-register").value;
    const passwordUserNew = document.getElementById("showpass2").value;

    const userNew = new Usuarios(nameUserNew, emailUserNew, usuarioUserNew, passwordUserNew);

    localStorage.setItem('user', JSON.stringify(userNew));
    Swal.fire({
        title: "Registrado Correctamente",
        icon: 'success',
        width: '40%',
        backdrop: true,
        timer: 3000,
        timerProgressBar: true,
        allowOutsideClick: false,
    });
    const userNewinJson = JSON.parse(localStorage.getItem('user'));

}


function signup(usuarioEnJson) {
    const emailEntrada = document.getElementById("email-login").value;
    const passwordEntrada = document.getElementById("showpass").value;

    // emailEntrada === usuarioEnJson.email ? console.log("Ingresado Correctamente") : console.log("Datos incorrectos");

    if (emailEntrada === usuarioEnJson.email && passwordEntrada === usuarioEnJson.password) {
        Swal.fire({
            title: "Sesion Iniciada",
            // icon: 'success',
            icon: 'success',
            width: '40%',
            backdrop: true,
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
        });
    } else {
        Swal.fire({
            title: "Datos Incorrectos",
            // icon: 'success',
            icon: 'error',
            width: '40%',
            backdrop: true,
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
        });
    }
}
function showpassword() {
    const inputPassword = document.getElementById("showpass");
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password"
    }
}

function showpassword2() {
    const inputPassword = document.getElementById("showpass2");
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password"
    }
}
function login() {

    if (window.innerWidth > 850) {
        formularioRegister.style.display = "none";
        containerLoginRegister.style.left = "10px"
        formularioLogin.style.display = "block";
        backRegister.style.opacity = "1";
        backLogin.style.opacity = "0";
    } else {
        formularioRegister.style.display = "none";
        containerLoginRegister.style.left = "0px"
        formularioLogin.style.display = "block";
        backRegister.style.display = "block";
        backLogin.style.display = "none";
    }

}
function widthPage() {
    if (window.innerWidth > 850) {
        backLogin.style.display = "block";
        backRegister.style.display = "block"
    } else {
        backRegister.style.opacity = "1";
        backRegister.style.display = "block"
        backLogin.style.display = "none";
        formularioLogin.style.display = "block";
        formularioRegister.style.display
            = "none";
        containerLoginRegister.style.left = "0px";
    }
}
widthPage();
function register() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "block";
        containerLoginRegister.style.left = "410px"
        formularioLogin.style.display = "none";
        backRegister.style.opacity = "0";
        backLogin.style.opacity = "1";
    } else {
        formularioRegister.style.display = "block";
        containerLoginRegister.style.left = "0px"
        formularioLogin.style.display = "none";
        backRegister.style.display = "none";
        backLogin.style.display = "block";
        backRegister.style.opacity = "1"
    }

}

