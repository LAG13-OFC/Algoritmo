/*
*Promesas:
*Ejemplo 1:

-> resolve: es una funcion que provoca que la promesa sea completa
-> reject: es una funcion que provoca que la promesa sea rechazado
-> then: si la promesa se completa
-> cath: si la promesa se rechaza
-> finally: define una funcion que se ejecuta siempre, independientemente 
    si la promesa se completa o rechaza; puede omitirse.
*/


// const promesa = new Promise((resolve, reject) => {
//     resolve(42);
// });

// promesa.then(valor => console.log(valor))
//         .catch(valor => console.error(valor))
//         .finally(() => console.info('Fin'));

/*
*Ejemplo 2: Implementar y consumir una promesa que solicite el ingreso 
* de un nombre por teclado. Si el nombre tiene mas de 5 letras, completar la promesa.
* En caso contrario rechazarla. En cualquier caso, devolver el valor ingresado.
*/ 

// const promesa2 = new Promise((resolve, reject) => {
//     const nombre = prompt('Nombre: ');
//     if(nombre.length > 5) {
//         resolve(nombre);
//     }
//     reject(nombre);
// })

// promesa2.then(valor => console.log(valor))
//         .catch(valor => console.error(valor))
//         .finally(() => console.info('Fin2'));

/*
*Ejemplo 3: Implementar una promesa que al cabo de 4 segundos se complete y 
* retorne un objeto con las clases nombre y apellidos
*/ 

// const promesa3 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const objeto = {
//             nombre: 'Lucas', apellido: 'Gonzalez'
//         };
//         resolve(objeto);
//     },4000)
// });

// promesa3.then(objeto => console.info(objeto)).catch(error => console.error(error));

/*
*Ejemplo 4: se tiene un vector de objetos con informacion (nombre y apellido)
* de 4 personas.
* Implementar una promesa de forma que al cabo de  3 segundos,
* se complete devolviendo un vector con las personas de mayores de edad
* Si no hay ninguna persona mayor de edad, rechazar la promesa con el mensaje  "No hay personas"
* Consumir la promesa: 
*-> una lsta no ordenada de los nombres de las personas devueltas (si la promesa se Completa)
*-> un cuadro de mensaje con el error si la promesa rechaza 
*/ 
const vPersona = [
    {name: 'Lucas', surname: 'Gonzalez',years:'11'},
    {name: 'Alicia', surname: 'Rohleder',years:'13'},
    {name: 'Micaela', surname: 'Gomez',years:'22'},
    {name: 'Ariel', surname: 'Gonzalez',years:'11'}
]
const promesa5 = new Promise((resolve, reject) =>{
   setTimeout(() => {
    result = vPersona.filter(o => o['years'] >=18);
    if(result.length > 0){
        resolve(result);
    }
    reject('No hay Persona');
}, 3000 );
})

promesa5.then(objeto => {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    for(let i = 0; i < objeto.length; i++){
        let li = document.createElement('li');
        li.innerText = objeto[i].name;
        document.querySelector('ul').appendChild(li);
    }
})
        .catch(error => {
            alert(error)
        });
