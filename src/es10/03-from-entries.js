//* El método from-entries permite convertir un array de entries en un objeto

const objeto = {
    att1 : "a",
    att2 : "b",
    att3 : "c",
    att4 : "d"
}

let atributos = Object.entries(objeto);

console.log(atributos);
//? [ [ 'att1', 'a' ], [ 'att2', 'b' ], [ 'att3', 'c' ], [ 'att4', 'd' ] ]

let objetoNuevo = Object.fromEntries(atributos);

console.log(objetoNuevo);