// Crear un programa donde se declare una función flecha que reciba un vector de números como parámetro y devuelva el menor de todos los valores.



let vectorOriginal = [22,3,5,7,9,10];

const menor = (vector) => {
  const menor = vector.reduce((acumulador,valor) => {
    return acumulador < valor ? acumulador : valor;
  });
  return menor;
}
console.info(menor(vectorOriginal));