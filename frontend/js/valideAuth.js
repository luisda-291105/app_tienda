// esta funcion valida si el usuario esta logueado  o no al iniciar el index

(function () {
    // esta funcion valida si el usuario esta autenticado
    function estaAutenticado() {
        const usuarioLogueado = localStorage.getItem("usuarioLogueado") === "true"
        const usuarioAutenticado = sessionStorage.getItem("autenticado") === "true"

        return usuarioLogueado || usuarioAutenticado
    }

    // si no esta autenticado , redirigir el login
    if (!estaAutenticado()) {
        console.log("usuario no autentico , redirigiendo al login...");
        
        // calcular ruta correcta al login
        /* const rutaActual =  window.location.pathname
        let rutaLogin;

        if (rutaActual.includes("/pages/") || rutaActual.includes("/index/")) {
            // si esta en subcarpetas 
            rutaLogin = "../login.html"
        }else {
            // si esta en la raiz
            rutaActual = "login.html"
        }
        window.location.href = rutaLogin */
        window.location.href =  "login.html"
    } else{
        console.log("usuario autenticado , bienvenido")

        // 
    }

})();