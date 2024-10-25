//Hacer un programa que dado un vector de cadenas de caracteres con nombres de especies de animales, 
//devuelva otro vector de elementos
// HTML <li> cuyo contenido sea cada uno de los elementos del primer vector

let cadena = ['tigre', 'gato', 'vaca', 'perro'];
let result = cadena.map(a => {
    let li = document.createElement('li');
    li.innerText = a;
    return li;   
});
// let li = document.createElement('li');
// li= document.querySelectorAll('li');

console.info(result);

console.info("--------- 2 ---------")
//* Hacer un programa que dado un vector de números enteros,
//*  devuelva un vector conteniendo los números pares mayores o iguales que 20.

let v = [23,12,20,16, 9,34,58, 99,45];

result = v.filter(a => a%2  == 0 && a>=20);
console.info(result);

console.info("--------- 3 ---------")
//* Hacer un programa que dado un vector de cadenas de caracteres con nombres de personas,
//* devuelva otro vector conteniendo los nombres de personas que tengan más de 5 letras, en letra mayúscula

let personas = ['lucas','ariel','alicia', 'camila'];

result = personas.filter(a => a.length > 5 && a.toUpperCase())

console.info(result);

console.info("--------- 4 ---------")

//* Hacer un programa donde dado un vector de 3 objetos, que contengan las claves nombre,
//* apellido y ciudad, devuelva la cantidad de personas que viven en Buenos Aires


let objects = [
    {'nombre': 'lucas', 'apellidos': 'gonzalez','ciudad': 'Buenos Aires', 'edad': 22},
    {'nombre': 'alicia', 'apellidos': 'rohleder','ciudad': 'Merlo', 'edad': 44},
    {'nombre': 'ariel', 'apellidos': 'costa','ciudad': 'Pontevedra', 'edad': 11},
    {'nombre': 'Carlos', 'apellidos': 'ventura','ciudad': 'Pontevedra', 'edad': 8},
    {'nombre': 'pedro', 'apellidos': 'baez','ciudad': 'Merlo', 'edad': 77},
];

let count = objects.filter(obj => obj.ciudad === 'Buenos Aires').length;

let count1 = objects.reduce((contador, valor) => {
    if (valor.ciudad === 'Buenos Aires') 
        contador++;
    return contador;
},0);

console.info(count); 
console.info(count1); 

console.info("--------- 5 ---------")

//* Hacer un programa que con el mismo vector del punto anterior, 
//* devuelva el promedio de las edades de las personas que viven en Merlo

const promedio = objects.filter(persona => persona.ciudad === 'Merlo')
                        .reduce((acumulador,valor,indice, vector) => acumulador +valor.edad / vector.length);

 console.info(promedio); 


 console.info("--------- 6 ---------")

 //* Hacer un programa que dado un vector de cadenas de caracteres, 
 //* devuelva la última palabra que empiece con la letra "L"


 const vectorEjercicio10 = [[1, 2, 3], [1, 1, 1], [4, 5, 6], [7, 8, 9]];

 const sumatoriaVector = vectorEjercicio10.map(vector => {
     return vector.reduce((acumulador, valor) => acumulador + valor, 0);
 });
 
 const indiceMenor = sumatoriaVector.reduce((menorIndice, valor, indice) => {
     if (valor < sumatoriaVector[menorIndice]) {
         return indice;
     }
     return menorIndice;
 }, 0);
 
 console.log(indiceMenor); // Esto debería imprimir 1, que es el índice del vector con la menor suma
 