// Declarar una función con nombre que reciba un vector como parámetro y devuelva un nuevo vector donde cada elemento sea el doble de los elementos del vector original. Por ejemplo, si el vector es [1, 3, 5, 7, 9, 10], el resultado debería ser [2, 6, 10, 14, 18, 20].



let vectorOriginal = [1,3,5,7,9,10];

function duplicarVector(vector) {
    let result= [];
    for (let i = 0 ; i < vector.length ; i++) {
        result[i] = vector[i]*2;
    }
    return result;
}

let vectorDevuelto = duplicarVector(vectorOriginal);

for(let i = 0; i < vectorDevuelto.length ; i++) {
    console.info(vectorDevuelto[i]);
}