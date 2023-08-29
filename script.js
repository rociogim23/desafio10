const PRODUCTS = [
    { id: 1, name: "Teléfono inteligente", description: "Excelente teléfono, gran pantalla y cámaras." },
    { id: 2, name: "Laptop", description: "Diseño elegante, procesador rápido y gran capacidad de almacenamiento." },
    { id: 3, name: "Audífonos inalámbricos", description: "Calidad de sonido envolvente tanto para música como para llamadas" }
];


function guardar_id(id){
    localStorage.setItem("ProdID",id);
    window.location.href= "product-info.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");

    PRODUCTS.forEach((element)=>{
        if(productList){
            productList.innerHTML+=`<li><a href="#" onclick="guardar_id(${element.id})">${element.name}</a></li>`;
        }
    }
    );
});
