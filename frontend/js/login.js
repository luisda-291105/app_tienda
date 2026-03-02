// formulario
const userFrom = document.querySelector("#user") 
// inputs del login
const inputEmail = document.querySelector("#exampleInputEmail") 
const exampleInputPassword = document.querySelector("#exampleInputPassword") 
// cajita que dice Remember Me 
const customCheck = document.querySelector("#customCheck") 
// boton del login
const btnLogin = document.querySelector("#btnLogin")

document.addEventListener("DOMContentLoaded", () => {
    let login = new Login()
    login.InitLogin()
})

class Login {
    constructor() {
        
        this.InitLogin()
    }

    // funcion que carga esta logica 
    InitLogin(){
        this.loadInitialData()
    }

    // funcion que trae y retorna todos los usuarios registrados
    loadInitialData(){
        let users = JSON.parse(localStorage.getItem("users"))
        console.log("datos obtenidos " , users)
        return users
    }
}