//Función flecha estándar

const flechaEstandar = (parametro) => {
    let operacion = parametro * 2;
    return operacion
}

console.log(flechaEstandar(2));

//Función flecha sin paréntesis

const flechaSinParentesis = parametro => {
    let operacion = parametro * 2;
    return operacion;
}

console.log(flechaSinParentesis(2));

//Función flecha con retorno implícito

const flechaConRetornoImplicito = (parametro) => (
    parametro * 2
)

console.log(flechaConRetornoImplicito(2));

// Función flecha con retorno implícito sin paréntesis

const flechaSinRetornoNiParentesis = parametro => parametro*2

console.log(flechaSinRetornoNiParentesis(2));