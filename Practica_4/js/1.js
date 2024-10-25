let vector = [1,23,31,45,57,69,75,83,9,10];
console.info("eje 1")
for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 === 0) {
        console.info(vector[i]);
    }
}
console.info("eje 2")
for (let i = 0; i < vector.length; i++) {

    if (i % 2 === 0) {
        console.info(vector[i]);
    }
}
console.info("eje 3")
for (let i = 0; i < vector.length; i++) {

    if (vector[i] > 25) {
        console.info(vector[i]);
    }
}