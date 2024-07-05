let multiplicarYDuplicar = (num1, num2) => (num1*num2)*2;

let producto = multiplicarYDuplicar(2, 2);

console.log(producto);

document.getElementById('click').onclick = function () {
    console.warn("No se pudo concretar la operación");
}


document.getElementById('btnguardar').onclick = function () {
    if(confirm("deseas guardar?")) {
        alert("Respuesta Guardada");
    }
}