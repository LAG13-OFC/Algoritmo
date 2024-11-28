/*
 * Gonzalez Lucas A.
 * 3° Sistemas
 * ISFT177
 * Practica 2 de JS 
 */


//*1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Desarrollar un programa, declarando las funciones correspondientes, tal que en un momento el contenido de la pila de llamadas quede como se muestra a continuación:
// console.info("Hola alumno")
// saludar()
// comenzar()
// Contexto global


function saludar(nombre){
    console.info(`Hola alumno ${nombre}`);
};

function comenzar(nombre){
    saludar(nombre);
};

comenzar("Lucas");

//*2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Graficar la pila de llamadas para el programa cuyo código se muestra a continuación:
// // Archivo: call_stack.js

// function contarHastaEl(numero) {
// 	console.info("Contando hasta el " + numero);
// }

// contarHastaEl(5); // ----- Graficar en este punto

// console.warn("ATENCION: Iniciamos la segunda cuenta");

// contarHastaEl(10); // ----- Graficar en este otro punto


 // En esta me quede en duda si esta bien

/*
            ___________________________
           |    contarHastaEl(10)     |
          |__________________________|
         |    console.warn()        |
        |__________________________|
       |    contarHastaEl(5)      |
      |__________________________|
     |     contextoGlobal       |
    |__________________________|


*/



//*3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Implementar un programa en Javascript, de manera que las funciones comenzar(), darLaBienvenidaA(),
//  y despedirA() queden apiladas en ese orden.

function comenzar(nombre){
    return `Hola ${nombre}`;
}

function darLaBienvenidaA(nombre){
    console.info(`Bienvenido/a ${nombre}`);
    comenzar(nombre);
}

function despedirA(nombre){
    console.info(`Chau ${nombre}`);
    comenzar(darLaBienvenidaA(nombre));
}

despedirA("Lucas");

//*4 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Desarrollar un programa en Javascript donde en un momento la pila de llamadas del programa quede con la siguiente estructura:
// verificarNivelDelRefrigerante()
// verificarRefrigerante()
// repararVehiculo()
// Contexto global


function verificarNivelDelRefrigerante(vehiculo){
    return `vehiculo ${vehiculo} verificado`;
}

function verificarRefrigerante(vehiculo){
    console.info(`vehiculo verificando es ${vehiculo}`)
}
function repararVehiculo(vehiculo){
    verificarNivelDelRefrigerante(verificarRefrigerante(vehiculo))
}

repararVehiculo("bmw");


// //*5 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Desarrollar un programa donde se declare una función que solicite el ingreso por teclado del nombre del usuario y retorne ese valor. Mostrar un mensaje de advertencia por la consola, con la frase "Tenga cuidado, usuario <nombre>, con lo que va a hacer", reemplazando <nombre> por el valor devuelto por la función anterior.

function users(){
    return prompt("Ingrese su nombre: ");
};
console.warn(`Tenga cuidado, usuario ${users()}, con lo que va a hacer`);

//*6 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Desarrollar un programa donde se declare una función llamada saludar, que reciba el nombre y el apellido de una persona en dos parámetros distintos. La función debe mostrar un cuadro de mensaje conteniendo la frase "Bienvenido <usuario> <apellido>", reemplazado <usuario> y <apellido> por los valores recibidos por parámetros.

function saludar(nombre, apellido){
    console.info(`Bienvenido ${nombre} ${apellido}`);
}
saludar("Lucas", "Gonzalez");