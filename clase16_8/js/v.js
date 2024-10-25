let vector = [4,5,7,9];

let w = vector.map(n => n/2);

console.log(w);



//* CADENAS DE CARACTERES

let vector1 = ['perro', 'gator', 'tortuga'];

let vparametro = vector1.map(p => p.length);

console.log(vparametro);

let v = [25,38,42,11];
result = v.map(v => v%2 ===0);
console.log(result);

//*
let per = [
    {
        'nombre': 'Ariel',
        'edad': 18
    },
    {
        'nombre': 'Fabian',
        'edad': 25
    }
];

result = per.map(p => p.edad).filter(e => e%2 == 0);

console.log(result);