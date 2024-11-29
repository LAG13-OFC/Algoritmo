let v = [2,4,6,1,9,10];

let result = v.map(n => n*2);

// 1) Hacer un programa que dado un vector de cadenas de caracteres con nombres de especies de animales, devuelva otro vector de elementos HTML <li> cuyo contenido sea cada uno de los elementos del primer vector
console.log('-------1--------');
console.log(result);
result = v.map(n => n/3);

// 2) Hacer un programa que dado un vector de números enteros, devuelva un vector conteniendo los números pares mayores o iguales que 20.
console.log('--------2-------');
console.log(result);
let vstring = ['lucas', 'ariel', 'gonzalez', 'casa'];
result = vstring.map(s => s.toUpperCase());

// 3) Hacer un programa que dado un vector de cadenas de caracteres con nombres de personas, devuelva otro vector conteniendo los nombres de personas que tengan más de 5 letras, en letra mayúscula
console.log('-------3--------');
console.log(result);
result = vstring.map(s => s.toLowerCase());

// 4) Hacer un programa donde dado un vector de 3 objetos, que contengan las claves nombre, apellido y ciudad, devuelva la cantidad de personas que viven en Buenos Aires
console.log('-------4--------');
console.log(result);
result = v.map(t => (t*1.8)+32);

// 5) Hacer un programa que con el mismo vector del punto anterior, devuelva el promedio de las edades de las personas que viven en Merlo
console.log('-------5--------');
console.log(result);

//* fILTRADO

// 6) Hacer un programa que dado un vector de cadenas de caracteres, devuelva la última palabra que empiece con la letra "L"
console.log('-------6--------');
result = v.filter(v => v> 3.14);
console.log(result);

// 7) Desarrollar un programa que dado un vector de cadenas de caracteres, devuelva la última palabra que finalice con la palabra "ero"

console.log('-------7--------');

result = vstring.filter(s => s.length> 5);
console.log(result);

console.log('-------8--------');

let object = [{
                'nombre': 'Lucas',
                'apellido': 'Gonzalez',
            },
            {
                'nombre': 'Micaela',
                'apellido': 'Gomez',
            },
            {
                'nombre': 'Martina',
                'apellido': 'Guimaraes',
            },
        
        ];

result = object.filter(o => o['nombre'].length >4  && o['apellido'].length > 5);
console.log(result);

console.log('-------9--------');

object = [{
    'hora': 3,
    'temperatura': 32,
},
{
    'hora': 10,
    'temperatura': 45,
},
{
    'hora': 23,
    'temperatura': 5,
},

];

result = object.filter(o => o['temperatura'] >30);
console.log(result);


console.log('-------10--------');

let vs = ['perro', 23, 'lucas', 45, 'tempertura',11];

result = vs.filter(n => Number.isInteger(n));

console.log(result);


//* Reducciones

console.log('-------11--------');
let v1 = [2,4,6,1,9,10];

result = v1.reduce((a, b) => a+ b, 0);
console.log(result);

console.log('-------12--------');

result = v1.reduce((a, b) => a+ b, 0);
console.log(result/v1.length);

console.log('-------13--------');

let personas = [{
    'nombre': 'Lucas',
    'edad': 32,
},
{
    'nombre': 'ariel',
    'edad': 45,
},
{
    'nombre': 'maria',
    'edad': 50,
},

];

result = personas.reduce((a, b) => {
    if(b.edad < a.edad) return b;
    return a;
} 
, personas[0]);
console.log(result);


