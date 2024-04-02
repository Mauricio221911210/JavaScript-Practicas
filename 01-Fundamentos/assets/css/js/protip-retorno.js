//function crearPersona(nombre,apellido) {
//    return{ nombre, apellido}
//}


const crearPersona = (nombre,apellido) => ({nombre, apellido}) ;

const persona= crearPersona('Fernando', 'Herrera');
console.log(persona);



function imprimeArgumento(){
    console.log(arguments);
}

const imprimeArgumento2 = (edad,...args) => { 
   // console.log({edad,args});
    return args;
}

const [casado, vivo,nombre,saludo] = imprimeArgumento2(10,true,false,'Mauricio', 'Hola');
console.log({casado, vivo,nombre,saludo});

const {apellido: nuevoApellido} = crearPersona('Fernando', 'Herrera');
console.log({nuevoApellido});

const Edward= {
    nombre: 'Edward',
    codeName: 'Kenway',
    vivo: false,
    edad: 36,
    trajes: ['Capitan','original','rey de los piratas'],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes} ) => {



    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(Edward);  