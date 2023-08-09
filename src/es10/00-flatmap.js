//* El método flat permite aplanar arrays de varias dimensiones en uno de una sola dimensión

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

let arrei = matrix.flat(); //? Si no enviamos argumentos, va a aplanar 2 dimensiones por defecto

console.log(arrei); 

const cube = [[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]],[[13,14,15],[16,17,18]]];

arrei = cube.flat(3); //? Aplana 3 dimensiones

console.log(arrei);

//* El método flat-map es una combinación entre flat y map

const strings = ["Nunca pares", "de Aprender"];

strings.map(string => string.split(" ")) ;
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]

strings.flatMap(string => string.split(" ")) ;
// [ 'Nunca', 'pares', 'de', 'Aprender' ]