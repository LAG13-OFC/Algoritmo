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