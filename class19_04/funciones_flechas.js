//Funcion Flecha (arrow functions)
let multiplicar = (num1, num2) => {
    return num1 * num2;
}

let dividir = (num1, num2) => num1 / num2;

let producto = multiplicar(9, 9);
let divido = dividir(9, 9);

console.info(`Resultado ${producto}`);
console.info(`Resultado ${divido}`);