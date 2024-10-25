let v = [2,4,6,1,9,10];

let result = v.map(n => n*2);

console.log('-------1--------');
console.log(result);


result = v.map(n => n/3);
console.log('--------2-------');
console.log(result);

let vstring = ['lucas', 'ariel', 'gonzalez', 'casa'];

result = vstring.map(s => s.toUpperCase());
console.log('-------3--------');
console.log(result);

result = vstring.map(s => s.toLowerCase());
console.log('-------4--------');
console.log(result);
result = v.map(t => (t*1.8)+32);
console.log('-------5--------');
console.log(result);

//* fILTRADO

console.log('-------6--------');

result = v.filter(v => v> 3.14);
console.log(result);

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


