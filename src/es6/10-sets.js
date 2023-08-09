//* Los sets son conjuntos de valores únicos 

let conjunto = new Set();

conjunto.add('epa');
conjunto.add('menor');
conjunto.add('como tu ta');

//! Cuando intentas añadir un nuevo elemento que ya existe en el conjunto, simplemente no lo añade, en este caso, el conjunto solo tendrá un valor 'epa'
conjunto.add('epa');
conjunto.add('epa');

console.log(conjunto);
console.log(conjunto.size); //? 3