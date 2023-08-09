//* Esta wea es simple, puedes declarar objetos sin repetir variables en sus atributos

let arroz = "arroz";
let huevo = "huevo";

let platoTipico = {
    arroz : arroz,
    huevo : huevo
} //! Así se hacía antes

let platoTipicoNuevo = {
    arroz,
    huevo
} //! Así se hace ahora

console.log(platoTipico);
console.log(platoTipicoNuevo);