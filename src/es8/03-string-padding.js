//* padStart()

const fecha = {
    dia: '2',
    mes: '4',
    año: '2023'
}

console.log(`${fecha.dia.padStart(2,'0')}/${fecha.mes.padStart(2,'0')}/${fecha.año}`);

//* padEnd()

let num = 125.5;

//? Queremos que el número tenga más decimales, por ejemplo

console.log(`${String(num).padEnd(8,'0')}`);