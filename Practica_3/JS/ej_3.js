// En un documento HTML colocar una caja de texto, un botón
// y una lista no ordenada vacía. Hacer un programa en
// Javascript que cuando el usuario aprete el botón,
// se lea lo escrito en la caja de texto y se agregue un
// ítem a la lista no ordenada, de forma que el ítem
// contenga el texto.
// En un encabezado de segundo nivel, debajo de la lista,
// mostrar la cantidad de elementos que la lista tiene


document.querySelector("button").onclick = function() {

    let textoIngresado = document.querySelector("input").value;
    let lista = document.createElement("li");
    lista.innerText = textoIngresado;
    console.info(lista);
    let contenedor = document.querySelector("ul");
    let referencia = contenedor.querySelector("li");
    contenedor.insertBefore(lista, referencia);


    let cant = document.querySelectorAll("li").length;
    
    document.querySelector("h2").innerText = cant;
}

