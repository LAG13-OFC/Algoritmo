let p = ['perro', 'gato', 'paloma', 'pez'];

let result = p.reduce((a,b) => {
    if (b.length < a.length) return b;
    return a;
},p[0])

console.log(result);


let v = [[1,2,3],[2,3], [4,5,6,7]];

result = v.reduce((a,b)=> {
    if (b.length < a.length) return b;
    return a;
}, v[0]);

console.log(result);