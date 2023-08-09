import aguacate from "./prueba.mjs" //* Importación por defecto
import { imprimirHolaMenor, quesitoAhumado } from "./prueba.mjs"; //* Importacion por nombres
import * as ensalada from "./prueba.mjs"; //* Importar todo en un objeto


//? Uso directo (Sin objeto)

console.log("Código código");
console.log(aguacate());
console.log(imprimirHolaMenor());
console.log(quesitoAhumado);

//? Uso con objeto

console.log(ensalada.imprimirHolaMenor());