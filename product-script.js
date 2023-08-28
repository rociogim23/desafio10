document.addEventListener("DOMContentLoaded", function () {
    const productName = document.getElementById("productName");
    const productDescription = document.getElementById("productDescription");
    
    let id = localStorage.getItem("ProdID");
    //Recupera el valor almacenado en el localStorage con la clave "ProdID"
    
    // Busca ese producto en la matriz de productos y muestra su nombre y descripción en la página de detalles del producto.
    let prod_selec = PRODUCTS.find(product => product.id === parseInt(id));
    if (prod_selec) {
        productName.textContent = prod_selec.name;
        productDescription.textContent = prod_selec.description;
    }
    });
 