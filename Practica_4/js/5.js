// Crear un documento HTML que contenga 3 párrafos con un contenido cualquiera. Luego desarrollar un programa en Javascript que almacene en un vector los 3 párrafos, y muestre por la consola el contenido del párrafo ubicado en segundo lugar en el documento.


let vector = document.querySelectorAll('p');

console.info(vector[1].innerText);