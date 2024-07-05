// Desarrollar un documento HTML conteniendo una lista no ordenada de 3 ítems:
// Luego, crear un programa en Javascript que, invocando a las funciones del DOM correspondientes, intente:
// a) Seleccionar todos los elementos de la lista
// b) Seleccionar el primer elemento de la lista
// c) Seleccionar el elemento de la lista con ID item-arroz
// d) Seleccionar todos los elementos de la lista que tengan la clase item

console.info("Punto A:");
let lista = document.querySelectorAll("li");

for(let k = 0; k < lista.length; k++){
    console.info(lista[k].innerText);
}

console.info("\nPunto B:");
let element = document.querySelector("li");
    console.info(element.innerText);


console.info("\nPunto C:");
let arroz = document.querySelector("#item-arroz");
console.info(arroz.innerText);

console.info("\nPunto D:");
let allItems = document.querySelectorAll(".item");
    for(let k = 0; k < allItems.length; k++){
        console.info(allItems[k].innerText);
    }   