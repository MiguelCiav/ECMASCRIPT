//COMO ENVIAR PARÁMETROS POR DEFECTO

function nuevoUsuario(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name, age, country);
}

nuevoUsuario(country="VE");