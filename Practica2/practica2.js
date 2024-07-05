/*
 * Gonzalez Lucas A.
 * 3° Sistemas
 * ISFT177
 * Practica 2 de JS 
 */


//*1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function saludar(nombre){
    console.info(`Hola alumno ${nombre}`);
};

function comenzar(nombre){
    saludar(nombre);
};

comenzar("Lucas");

//*2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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


//*5 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function users(){
    return prompt("Ingrese su nombre: ");
};
console.warn(`Tenga cuidado, usuario ${users()}, con lo que va a hacer`);

//*6 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function saludar(nombre, apellido){
    console.info(`Bienvenido ${nombre} ${apellido}`);
}
saludar("Lucas", "Gonzalez");