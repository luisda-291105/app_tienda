// formulario
const userFrom = document.querySelector("#user");
// inputs del login
const inputEmail = document.querySelector("#exampleInputEmail");
const inputPassword = document.querySelector("#exampleInputPassword");
// cajita que dice Remember Me
const customCheck = document.querySelector("#customCheck");
// boton del login
const btnLogin = document.querySelector("#btnLogin");

document.addEventListener("DOMContentLoaded", () => {
    let login = new Login();
    login.InitLogin();
});

if (btnLogin) {
    btnLogin.addEventListener("click", () => {
        let login = new Login();

        login.valideUserLogin(inputEmail.value, inputPassword.value);
    });
}

class Login {
    constructor() {
        this.users = [];
        this.storageKeyUsers = "users";
        // this.InitLogin();
    }

    // funcion que carga esta logica
    InitLogin() {
        this.loadInitialData();
    }

    // funcion que trae y retorna todos los usuarios registrados
    loadInitialData() {
        this.users = JSON.parse(localStorage.getItem(this.storageKeyUsers));
        console.log("datos obtenidos ", this.users);
        return this.users;
    }

    // funcion que valida el email y pass ingresados con los ya registrados
    valideUserLogin(email, pass) {
        try {
            if (email.length == 0 && pass.length == 0) {
                console.log("debes ingresar contenido");
            } else {
                let users = this.loadInitialData();
                const usuariosEncontrados = users.find(
                    (usuario) =>
                        usuario.inputEmail === email &&
                        usuario.inputPassword === pass
                );
                if (usuariosEncontrados) {
                    window.location.href = "index.html";
                    MostrarUsuarioDashboard(usuariosEncontrados)
                } else {}
            }
        } catch (error) {
            console.error(error);
        }
    }
}

function MostrarUsuarioDashboard(user){
    console.log("usuario que inicio seccion");
    console.table(user)
    localStorage.setItem("userFound" , JSON.stringify(user))
}
