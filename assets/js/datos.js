const usuarioTest = {
    nombreCompleto: "Matias Lanfredi",
    email: "matiaslanfredia@gmail.com",
    usuario: "Lanfredi98",
    password: "coderhouse2022"
}

localStorage.setItem('user', JSON.stringify(usuarioTest));
// como asi ?

class Usuarios {
    constructor(nombre, email, usuario, password) {
        this.nombre = nombre;
        this.email = email;
        this.usuario = usuario;
        this.password = password;
    }

}




