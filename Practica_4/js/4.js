let vector = ['perro', 'gato', 'tigre', 'guepardo'];

let ol = document.createElement('ol');
document.body.appendChild(ol);

for (let i = 0; i < vector.length; i++) {
        let li = document.createElement('li');
        li.innerText = vector[i];
        let content = document.querySelector('ol');
        content.appendChild(li);

}