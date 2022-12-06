// Tipos de datos 

//alfanumerico
//let nombrePasajero = "Pedro Silva";
//nombrePasajero = "Ramon Silva";

//numerico
let valorBoleto = 1000;
const impuestoAeropuerto =100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Booleano (logicos [true, false ])
let boletoActivo = true;

// Operaciones Aritmeticas

//suma
let totalBoletos = valorBoleto + valorBoleto * porcentajeTasaEmbarque + gestionAgencia;


// Orden de presedencia
// ()
// Exp
// * y / 
// + y -
let totalBoletosForma2 = (valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque + gestionAgencia;

// Concatenacion de texto (+)
let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;

//console.log(nombreCompleto);

let multiplicacion ='1000'/ '10';
//console.log(multiplicacion)

let pasaporte = parseFloat("1000") + parseInt("12");
//console.log(pasaporte)

let noEsUnNumero = parseInt("asasdafd");
console.log(noEsUnNumero);

