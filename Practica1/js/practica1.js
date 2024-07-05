//Alumno Gonzalez Lucas Ariel


//1

console.log("ISFT Tercero Sistemas");

//2
console.warn("Para empezar, presione una tecla cualquiera");

//3
var oracion = ("Para empezar debes abonar 10 bitcoins: ");

do {
    var bitcoins = prompt(oracion);
}while(bitcoins !=10);

//4
var oracion = ("Ingrese usuario: ");
var user = "";
do {
    var user = prompt(oracion);
}while(user == "");

console.log("Bienvenido al curso, ",user);

//5
 for (var i = 1; i <11; i++) {
    console.log(i);
 }

 //6
 for (var i = 25; i >0; i--) {
    console.log(i);
 }

 //7
 for (var i = 0; i <50; i++) {
    if(i%2==0) {
    console.log(i);
    }
 }

 //8
 var numero = prompt("Ingrese un numero: ");
 for (var i = 0; i <numero; i++) {
    console.log(i);
 }

//9
var nombre = "";
var edad =0;
do {
    nombre = prompt("Ingrese su nombre: ");
}while (nombre =="");

do{
    edad = prompt("Ingrese su edad: ");
}while (edad == 0);


if(edad < 18){
    
    console.error("Para ingresar debes ser mayor de edad");
    alert("Para ingresar debes ser mayor de edad");
    location.reload();
}
console.info("Tu nombre es ", nombre, " y sos mayor de edad");

//10
var nombre = "";
var numero =0;

do{
    numero = prompt("Ingrese un numero: ");
}while (numero == 0);

do {
    nombre = prompt("Ingrese su nombre: ");
}while (nombre =="");

for (var i=0; i<numero; i++){
    console.log(nombre);
}

//11
var resultado = confirm("EStas seguro de cerrar el programa?");

if(resultado == true){
    console.warn("Sus datos se perderan inmediatamente");
}else{
    console.info("Ya puedes seguir trabajando");
}

//12

for(var i = 0; i <100; i++){

    if(i%3==0 && i%5==0){
        console.log("FizzBuzz "); 
    }else{
        if(i%3==0){
            console.log("Fizz"); 
        }
        if(i%5==0){
            console.log("Buzz"); 
        }
    }
    
}

