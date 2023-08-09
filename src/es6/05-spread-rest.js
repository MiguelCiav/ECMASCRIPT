//* Spread Operator
//* Aplicación en funciones

let nombres = ["María", "Juana", "Antonieta"];

miFuncion("Microsoft", ...nombres); //! Spread

function miFuncion(empresa, ...nombres){ //! Este es un rest, no un spread
    console.log(`Lista de empleados de ${empresa}:`);

    for(let nombre of nombres){
        console.log(nombre);
    }
}

//* Aplicación en arreglos

let arreglo = [1,2,3];
let nuevoArreglo = [...arreglo, 4, 5, 6];
console.log(nuevoArreglo);

//* Aplicación en objetos

let objeto = {
    key1 : 1,
    key2 : 2,
    key3 : 3
}

objetoNuevo = {
    ...objeto,
    key4 : 4,
    key5 : 5
}

console.log(objetoNuevo);

//* Aplicaciones interesantes

//? Sustituir el uso de push(), splice(), concat() etc...

const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics);
// [ 'head', 'shoulders', 'knees', 'and', 'toes' ]

//? Copiar arrays

const arr = [1,2,3];
const arr2 = [...arr];

console.log(arr == arr2); //false

//? Una mejor manera de concatenar arrays

let arr3 = [0,1,2];
let arr4 = [3,4,5];
arr3 = [...arr3, ...arr4];

console.log(arr3); 
// [ 0, 1, 2, 3, 4, 5 ]

//? Clonar o fusionar objetos

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }