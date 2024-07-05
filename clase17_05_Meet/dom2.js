let encabezado = document.getElementById("titulo");
console.info(encabezado.id);
console.info(encabezado.class);
console.info(encabezado.title);
console.info(encabezado['class']);
console.info(encabezado.getAttribute('class'));

let h3 = document.getElementById('problemas');

console.info(h3.getAttribute('data-problema'));