//CARACTERÍSTICAS DE CADA PALABRA RESERVADA EN ES2015 O ES6

//1. FUNCTION SCOPE Y GLOBAL SCOPE
//ESTE CÓDIGO TIENE ERRORES

function funcion(){
    if(true){
        var variable1 = "var1";
        let variable2 = "var2";
        const constante = "constante";
    }

    console.log(variable1);
    console.log(variable2);
    console.log(constante);
}

funcion();

/* 
SALIDA:
   var1
   ERROR

Este error sucede porque las variables declaradas con var tienen un scope de función, pero no un scope de bloque, por lo tanto, las variables var pueden usarse en cualquier segmento de la función
*/

//2. RE-ASIGNACIÓN

var reasignar1 = "1";
let reasignar2 = "2";
const reasignar3 = "3";

reasignar1 = "uno"; //Funciona
reasignar2 = "dos"; //Funciona
reasignar3 = "tres"; //ERROR

//Las constantes no se reasignan

//3. RE-DECLARACIÓN

var redeclarar1 = "1";
let redeclarar2 = "2";
const redeclarar3 = "3";

var redeclarar1 = "3"; //Funciona
let redeclarar2 = "8"; //ERROR
const redeclarar3 = "10"; //ERROR

//Solo las var pueden ser re-declaradas

//4. HOISTING (Variables)

console.log(hoisting1);
console.log(hoisting2);
console.log(hoisting3);

var hoisting1;
let hoisting2;
const hoisting3 = "hola";

/* 
SALIDA: 
   undefined
   ERROR

Esto sucede porque las variables var se inicializan como undefined al aplicarle hoisting, mientras que let
y const son inaccesibles
*/

//5. HOISTING (Funciones)

funcionHoisting1();

function funcionHoisting1(){
    var hola1 = "hola1";
    let hola2 = "hola2";
    const hola3 = "hola3";
    console.log(hola1);
    console.log(hola2);
    console.log(hola3);
}

/*
SALIDA
   hola1
   hola2
   hola3

Las funciones tienen hoisting independientemente de los tipos de variable que tenga dentro de sí
*/