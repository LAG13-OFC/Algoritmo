// Crear un programa donde se declare una función normal que reciba un elemento HTML por parámetro y devuelva cuántas letras tiene su contenido. Tip: usar la propiedad .length.

const contarLetras = (elemento) => {
  return elemento.innerText.length;
}

console.info(contarLetras(document.querySelector("p")));