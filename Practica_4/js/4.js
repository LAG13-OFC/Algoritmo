// Crear un programa que dado el vector del punto 2, genere una lista ordenada y por cada uno de los elementos del vector, le agregue un ítem de lista y que por último añada la lista ordenada al documento HTML.



let vector = ['perro', 'gato', 'tigre', 'guepardo'];

let ol = document.createElement('ol');
document.body.appendChild(ol);

for (let i = 0; i < vector.length; i++) {
        let li = document.createElement('li');
        li.innerText = vector[i];
        let content = document.querySelector('ol');
        content.appendChild(li);

}