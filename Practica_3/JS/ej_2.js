// Desarrollar un documento HTML que contenga una caja de texto y un párrafo. Implementar un script en Javascript de manera que:
// a) El usuario ingrese el texto en la caja
// b) Al apretar un botón, se lea el valor ingresado en la caja de texto
// c) Se seleccione el párrafo y se modifique su contenido, igualándolo al de la caja de texto

let texto = document.querySelector("button").onclick = function () {
    let textoIngresado = document.querySelector("input").value;
    console.info(textoIngresado);
    document.querySelector("p").innerText = textoIngresado;
}  