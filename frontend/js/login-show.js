const nameUser = document.querySelector("#userDropdown span")

document.addEventListener("DOMContentLoaded", () => {
    let user = collactUsersDataLogin();
    console.log("usuario inicio seccion");
    showUser(user);
    console.table(user);
});

function collactUsersDataLogin() {
    let userFound = JSON.parse(localStorage.getItem("userFound"));
    return userFound;
}

function showUser(user) {
    nameUser.textContent = user.firsName;
}