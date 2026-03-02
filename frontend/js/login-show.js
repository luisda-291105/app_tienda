// variable nombre de usuario en la barra de navegacion ,  es el perfil
const nameUser = document.querySelector("#userDropdown span")

document.addEventListener("DOMContentLoaded", () => {
    let user = collactUsersDataLogin();
    console.log("usuario inicio seccion");
    showUser(user);
    console.table(user);
});

// funcion que trae y guarda en una variable el usuario que inicio
function collactUsersDataLogin() {
    let userFound = JSON.parse(localStorage.getItem("userFound"));
    return userFound;
}

// funcion que muestra el usuario que inicio
function showUser(user) {
    nameUser.textContent = user.firsName;
}