let personaje = {
    nombre: 'Edward',
    codeName: 'Kenway',
    vivo: false,
    edad: 36,
    coords: {
        lat: 34.02,
        lng: -118.70
    },
    trajes: ['Capitan','original','rey de los piratas'],
    direccion: {
        zip: '52030, 152365',
        ubicacion: 'Lerma'
    },
    'ultimo-juego': 'assasin creed black flag'
};

console.log(personaje);
console.log('nombre', personaje.nombre);
console.log('nombre', personaje,['nombre']);
console.log('edad', personaje.edad);
console.log('coors', personaje.coords);
console.log('lat', personaje.coords.lat);
console.log('trajes', personaje.trajes.length);
console.log('trajes', personaje.trajes[personaje.trajes.length - 1 ]);



const x = 'vivo';
console.log('vivo', personaje[x]);

console.log('ultimo juego', personaje['ultimo-juego']);


//Mas Detalles


delete personaje.edad ;
console.log(personaje);

personaje.casado = true;

const entriesPares =  Object.entries( personaje );
console.log( entriesPares);


Object.freeze( personaje);

personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'costa rica';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});








