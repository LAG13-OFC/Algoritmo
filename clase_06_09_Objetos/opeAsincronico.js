// const promesa = new Promise((resolve, reject) => {
//     resolve(4);
// });


// promesa.then(valor => console.info(valor)).catch(err => console.error(err));


/*
 Problema: implemntar una promesa donde se solicite al usuario que ingrese un valor numerico por teclado.
 Si el valor es impar, completar la Promesa, Si es par, rechazar la promesa
 */

// const promesa2 = new Promise((resolve, reject) => {
//     let valor = prompt('Ingrese un valor');
//    if(valor % 2 !== 0) resolve(valor);

//    reject('No se admite pares');
// });


// promesa2.then(valor => console.info(valor)).catch(err => console.error(err));


/*
Problema 2: Desarrollar una promesa donde se ingrese por teclado el Nombre, Apellido y edad de una enpresa.
 Si la persona es mayor de edad, 
*/ 

// const promesa3 = new Promise((resolve, reject) => {
//     let personas = {'nombre': prompt('Nombre'), 'apellido': prompt('Apellido'), 'edad': prompt('Edad')};
                
//     if(personas.edad >= 18) resolve(personas)

//     reject('No se permite menores');

// })

// promesa3.then(valor => console.info(valor)).catch(err => console.error(err));


// setTimeout(() => alert('Hola mundo'), 2000);

/*
Problema 3: implementar una promesa que 3 segundos y medio  se complete exitosamente Devolviendo el mensage 'promesa completada'
consumir la promesa y mostrar el mensaje en un cuadro de mensaje
*/

// const temeOut = new Promise(resolve => {
    
//     setTimeout(resolve('Promesa Completada'), 3500)
// });


// temeOut.then(valor => alert(valor)).catch(err => console.error(err));

const p = new Promise(resolve => {
    const time = prompt('Tiempo en segundos');
    time = number(time);
    setTimeout(resolve('Hola Mundo'), time*1000)
});


p.then(valor => console.info(valor)).catch(err => console.error(err));