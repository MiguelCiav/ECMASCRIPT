//* Optional chaining

const objetoEjemplo = {
    cadena1 : {
        subcadena: "a"
    },
    cadena2 : {
        subcadena: "b"
    }
}

console.log(objetoEjemplo.cadena1.subcadena); //? En los objetos, es posible encadenar, esto quiere decir que si tenemos un objeto anidado en otro, entonces podremos acceder a él usando la notación de punto.

try{
    console.log(objetoEjemplo.cadena3.epa);
} catch {
    console.log("ERROR, NO EXISTE EL ATRIBUTO 'cadena3'"); //! ERROR
}
//? Cuando intentamos aplicar el chaining con un objeto que no existe, esto retornará undefined, y si intentamos acceder a un atributo de undefined, terminaremos con un error, ya que undefined no es un objeto, es un tipo de dato primitivo


console.log(objetoEjemplo.cadena3?.epa); //? Esto evitará el error por completo, usar el operador ? permite verificar que, si recibimos un undefined, entonces no accederá a sus atributos y retornará unedfined.