//* Método includes()

let arrei = [1,2,3,4,5];

console.log(arrei.includes(3)); // true
console.log(arrei.includes(6)); // false

//* Includes() aplicado a strings

let estrin = "Queso e mano";

console.log(estrin.includes("Queso")); // true

//? Podemos definir en qué posición índice queremos buscar el valor
console.log(estrin.includes('e',6)); //true

//? Podemos usar valores negativos de índice para buscar de derecha a izquierda
//? -1 es el final del array, y va decreciendo a medida que avanzamos de derecha a izquierda
//? -1,-2,-3,-4 etc...

console.log(estrin.includes('o',-1)); //true
