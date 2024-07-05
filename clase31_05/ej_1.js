/*
* Eliminar el primer elemento de la lista
* dependiendo en que boton el usuario 
* hizo click
 */

document.querySelector("#eliminarCompra").onclick = function () {
    let compra = document.querySelector("#compras");
    compra.querySelector("li").remove();
}

document.querySelector("#eliminaringrediente").onclick = function () {
    let ingrediente = document.querySelector("#ingredientes");
    ingrediente.querySelector("li").remove();
}


document.querySelector("#vaciarCompras").onclick = function () {
    let compra = document.querySelector("#compras");
    let listaCompras = compra.querySelectorAll("li");
    for (let i = 0; i <listaCompras.length; i++) {
        listaCompras[i].remove();
    }   
}

document.querySelector("#vaciarIngredientes").onclick = function () {
    let ingrediente = document.querySelector("#ingredientes");
    let listaIngredientes = ingrediente.querySelectorAll("li");
    for (let i = 0; i <listaIngredientes.length; i++) {
        listaIngredientes[i].remove();
    }   
}