/* Operadores Aritmeticos (matematicos) */
let Numero1 = 12;
let Numero2 = 44;

let suma = Numero1 + Numero2;
let resta = Numero1 - Numero2;
let multi = Numero1 * Numero2;
let division = Numero1 / Numero2;
let resto =  Numero1 % Numero2;
let potencia = Numero1 ** 2;

console.log("La suma es :" + suma);
console.log("la resta es:" + resta);
console.log("la multiplicacion es:" + multi);
console.log("la division es:" + division);
console.log("El resto es:" + resto);
console.log("la potencia es:" + potencia);



/* Asignacion */

let numerito = 17;

numerito += 3;

console.error("El resultado es : " + numerito);

/* Comparacion */

let numerazo = 31;

console.log(numerazo == "31");

console.log(numerazo === "31");

console.log(numerazo != 33);

console.log(numerazo !== "31");

console.log(numerazo > 55);

console.log(numerazo < 55);

console.log(numerazo >= 31);

console.log(numerazo <= 30);


/* Logicos */

let esMayorDeEdad = true;
let tieneEntrada = true;

console.warn(esMayorDeEdad && tieneEntrada);

console.error(esMayorDeEdad || tieneEntrada);

console.warn(!esMayorDeEdad);

/* Cadena */

let mensaje1 = "Hola";
let mensaje2 = "¿Como estas?";

let mensaje_final = mensaje1 + " " + mensaje2;

mensaje_final += " Soy mauricio"

console.error(mensaje_final);

/* Incremento y decremento */

let cifra = 1200;

cifra++;

cifra--;

console.warn(cifra);



