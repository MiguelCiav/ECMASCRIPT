//1. CONCATENACIÓN DE CARACTERES CON TEMPLATE LITERALS

const hello = "Hello";
const world = "World";

let epicPhrase = `${hello} ${world}!`;
console.log(epicPhrase);

//PRUEBA LOCA XDD

function retornaHola(){
    const hola = "Hola";
    return hola;
}

function retornaMundo(num1,num2){
    //Si la suma de dos números da como resultado un número par, entonces retorna mundo
    return (num1 + num2)%2 == 0 ? "Mundo" : "Maldad >:(";
}

let epicPhrase2 = `${retornaHola()} ${retornaMundo(4,4)}!`;

console.log(epicPhrase2);

//Parece ser que puedo hacer el código que quiera dentro de las plantillas literales

//Plantilla Multilinea

epicPhrase = `Wasacaca con
Mayonesa y pan sobado, barriga
llena corazón contento`;

console.log(epicPhrase);