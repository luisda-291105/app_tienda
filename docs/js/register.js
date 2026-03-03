// variables
const userForm = document.querySelector("#user");
// input formulario del registro
const firstName = document.querySelector("#exampleFirstName");
const lastName = document.querySelector("#exampleLastName");
const inputEmail = document.querySelector("#exampleInputEmail");
const inputPassword = document.querySelector("#exampleInputPassword");
// boton del registro
const btnRegisterAccount = document.querySelector("#exampleRegisterAccount");


class RegisterClass {
    constructor() {
        this.users = []
        this.storeKeyUsers = "users"
    }

    // funcion que guarda en localStorage del usuario
    SaveUsersLocalStorage(user) {
        this.users = JSON.parse(localStorage.getItem(this.storeKeyUsers)) || [];

        this.users.push(user);
        console.table("usuarios guardado", this.users);

        localStorage.setItem(this.storeKeyUsers , JSON.stringify(this.users));
    }

    // funcion que recibe los datos del formulario y los convierte en un objeto
    CollectUsersData() {
        let user = {
            "firsName": firstName.value,
            "lastName": lastName.value,
            "inputEmail": inputEmail.value,
            "inputPassword": inputPassword.value,
        };
        console.table("usuario obtenido", user);
        return user;
    }

    // funion que limpia todos los datos del local storage
    InitRegister() {
        let user = this.CollectUsersData()
        this.SaveUsersLocalStorage(user)
    }

    // funcion que limpia todo el local storage
    clearAllLocalStorage() {
        localStorage.clear();
    }

}

// evento que carga la pagina
document.addEventListener("DOMContentLoaded", () => {
    console.log("dom cargado");
});

// evento del boton que envia los datos del formulario
if (btnRegisterAccount) {
    btnRegisterAccount.addEventListener("click", () => {
        const register = new RegisterClass()
        register.InitRegister()
    });
}


