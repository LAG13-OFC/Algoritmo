//funcion anonima (sin nombre)
let restar = function (num1, num2) {
    return num1 - num2;
}


console.info(restar(4, 5));

document.getElementById('titulo').onclick = function () {
    alert("Hola!");
}

document.body.onload = function () {
    console.info("Pagina cargada correctamente!");
}