//* Generadores

function* funcionGeneradora(){ //! La función inicia con un *
    let i = 0;

    while(true){ //! Los generadores son útiles en búcles infinitos
        console.log("INICIÉÉÉÉÉ");
        i++;
        yield i; //! El yield retorna un valor y guarda el estado actual de la función
    }
}

objetoGenerador = funcionGeneradora();

console.log(objetoGenerador.next().value);
console.log(objetoGenerador.next().value);
console.log(objetoGenerador.next().value);
console.log(objetoGenerador.next().value);

//! El objeto generador posee un atributo "done" que es true cuando ya no hay más yield o cuando ocurre un return