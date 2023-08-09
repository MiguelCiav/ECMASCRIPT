//* CLASES SIUUUU

//* Sintáxis de una Declaración de Clase

class persona {

    constructor (nombre, edad, pais) { //? Así se hace el constructor
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    get getEdad(){ //? Un getter, no tiene parámetros, ninguno
        return this.edad;
    }

    set setEdad(edad){ //? Un setter, solo puede tener un parámetro
        this.edad = edad;
    }
}

const juanito = new persona("Juanito",19,"VE");

console.log(juanito.getEdad); //! Al llamar a un get, no se pueden usar los paréntesis
juanito.setEdad = 12; //! Al usar un set, no lo llamamos como una función, sino como una variable, intenso...
console.log(juanito.getEdad);

//* Sintáxis de una Expresión de Clase anónima

let person = class {

    constructor (nombre, edad, pais) { 
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    get getEdad(){ 
        return this.edad;
    }

    set setEdad(edad){
        this.edad = edad;
    }
}

const pedrito = new person("Pedrito", 18, "MX");
console.log(pedrito);

//* Sintáxis de una Expresión de Clase nombrada

let pessoa = class personaNombrada {

    constructor (nombre, edad, pais) { 
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    get getEdad(){ 
        return this.edad;
    }

    set setEdad(edad){
        this.edad = edad;
    }
}

const maria = new pessoa("María", 17, "PE");
console.log(maria); 

//! ¿Pa que quiero hacer una expresión de clase nombrada si igual no uso su nombre :|?

//* Métodos estáticos

class Punto {
    constructor (x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia (a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt (dx * dx + dy * dy);
    }
}
  
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2)); 

//? Los métodos estáticos se pueden usar sin necesidad de instanciar la clase, muito interesante

//* Herencia con extends

class Animal {

    constructor(nombre) {
      this.nombre = nombre;
    }

    hablar() {
      console.log(this.nombre + ' hace un ruido.');
    }
}

  class Perro extends Animal {
    hablar() {
      console.log(this.nombre + ' ladra.');
    }
}

let Mandarino = new Perro("Mandarino");

Mandarino.hablar();

//* Uso de super

class Gato {
    constructor(nombre) {
      this.nombre = nombre;
    }

    raAaW(){
        console.log("raAaw");
    }

    hablar() {
      console.log(this.nombre + ' hace ruido.');
    }
}

class Leon extends Gato {
    hablar() {
      super.hablar(); //! Permite usar el método de la clase padre
      console.log(this.nombre + ' maulla.');
    }
}

let MisterLeon = new Leon("Max");
MisterLeon.hablar(); 
MisterLeon.raAaW(); //? Heredado directamente de Gato