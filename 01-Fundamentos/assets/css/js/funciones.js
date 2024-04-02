function saludar( nombre ){
    //console.log(arguments);
    //console.log('hola ' + nombre);
    return 1;

        //No se va a ejecutar
    console.log('soy un codigo chevere despues del return');
}

const saludar2 = function ( nombre ){
    console.log('hola ' + nombre);
}


const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


const retornoDeSALUDAR = saludar('Mauricio', 40, true, 'Mexico');
console.log({retornoDeSALUDAR});

//saludar2('Mauricio');
//saludarFlecha();
//saludarFlecha2('Rigoberto');

function sumar(a, b){
    return a+ b;
}

console.log( sumar(1,2) );

//const sumar2 = (a,b) => {
//    return a + b;
//}


const sumar2 = (a,b) =>  a + b;

function getAleatorio() {
    return Math.random();
}

console.log( getAleatorio()  );



const getAleatorio2 = () => Math.random();

console.log(getAleatorio2()  );
























