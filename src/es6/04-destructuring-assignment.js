//* Sintáxis en Arreglos

let a, b, rest;
let array = [10, 20, 30, 40, 50];

//Ejemplo 1

[a, b] = array;

console.log(a); // 10
console.log(b); // 20

//Ejemplo 2 (Declarando un array nuevo)

[a, b] = [30, 40];

console.log(a); // 30
console.log(b); // 40

//Ejemplo 3 (Rest)

[a, b, ...rest] = array;

console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

//* Sintáxis en Objetos

let objeto = {
  atributo1: 42,
  atributo2: true,
};

//Ejemplo 1
//! Es importante que los nombres de las variables a declarar coincidan con el nombre de los atributos

let { atributo1, atributo2 } = objeto;

console.log(atributo1); // 42
console.log(atributo2); // true

// Ejemplo 2 (Declarando un objeto nuevo)

({ nuevo1, nuevo2 } = { nuevo1: 10, nuevo2: 20 }); //! Siempre debe ir entre paréntesis

console.log(nuevo1); // 10
console.log(nuevo2); // 20

//Ejemplo 3 (rest)

let objetoGrande = {
  att1: "a",
  att2: "b",
  att3: "c",
  att4: "d",
  att5: "e",
};

let { att1, att2, ...restGrande } = objetoGrande;

console.log(att1); // a
console.log(att2); // b
console.log(restGrande); // { att3: 'c', att4: 'd', att5: 'e' }

// Ejemplo 4 (Rest declarando un objeto nuevo)

({ c, d, ...restNuevo } = { c: 10, d: 20, e: 30, f: 40 }); //! Siempre entre paréntesis
console.log(c);
console.log(d);
console.log(restNuevo);

//* Usos interesantes

//? Valores predeterminados (Aplicable en objetos y arrays)

let j, k;

[j = 5, k = 7] = [1];
console.log(j, k); // 1 7

//? Intercambio de variables

let h = 2;
let i = 4;

[h, i] = [i, h];

console.log(h, i); // 4 2

//? Recibir valores de una función que retorna un arreglo

function f() {
  return [4, 5, 6];
}

let [cuatro, cinco, seis] = f();

console.log(cuatro);
console.log(cinco);
console.log(seis);

//? Ignorar valores de una función que retorna un arreglo

function g() {
  return [8, 9, 10];
}

let [, , diez] = g();

console.log(diez);

//? Asignar nuevos nombre de variable al desestructurar un objeto

const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

//? Desempacar campos de objetos pasados como parámetro de función

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} es ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe es John"
