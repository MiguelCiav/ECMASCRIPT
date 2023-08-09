//* Nullish coalescing "??" es un operador útil para establecer valores por defecto

let valor = 5;
let otroValor = valor ?? 10;

console.log(otroValor); //? Como la variable 'valor' no es de tipo nulo ni undefined, entonces la consola va a imprimir 5

valor = null;
otroValor = valor ?? 10;

console.log(otroValor); //? Como la variable 'valor' es nula, entonces la consola imprimirá 10