// botom del formulario
const btnFrom = document.querySelector("#from-register-pro button");

// input del registro
const product_select = document.querySelector("#productos-select");
const precio = document.querySelector("#precio-pro");
const stock = document.querySelector("#form6Example6");
const descripcion = document.querySelector("#form6Example7");

// evento que carga la logica despues de cargar el dom
document.addEventListener("DOMContentLoaded", () => {
    let registroPro = new RegisterPro();
    registroPro.initRegisterPro();
    
});

// evento del formulario al enviar los datos
if (btnFrom) {
    btnFrom.addEventListener("click", () => {
        let registroPro = new RegisterPro();

        let product = registroPro.collectPro(
            product_select.value,
            precio.value,
            stock.value,
            descripcion.value,
        );
        registroPro.saveProLocalStorage(product)
    });
}

class RegisterPro {
    constructor() {
        this.products = [];
        this.storageKeyProducts = "products";
    }

    // funcion que inicia la clase
    initRegisterPro() {
        this.serchProduct();
    }

    // funcio que busca todos los productos guardados en local
    serchProduct() {
        let pro = JSON.parse(localStorage.getItem(this.storageKeyProducts));
        return pro;
    }

    // funcion que guarda en local storage
    saveProLocalStorage(pro) {
        try {
            this.products = JSON.parse(localStorage.getItem(this.storageKeyProducts)) || [];
            
            if ( pro.nombre == "none" || pro.descripcion == " " || pro.precio == 0 || pro.stock == 0){
                console.error("datos invalidos ")
            }else {
                console.log("datos guardados exitosa mente")
                console.table(pro)
                this.products.push(pro)
                localStorage.setItem(this.storageKeyProducts , JSON.stringify(this.products))
            }
        } catch (error) {
            console.error(error)
        }
    }

    // funcion que recolecta y reune los detalles del producto
    collectPro( nombre , precio, stock, descripcion) {
        let pro = {
            "nombre" : nombre,
            "precio": precio,
            "stock": stock,
            "descripcion": descripcion
        };

        return pro;
    }
}
