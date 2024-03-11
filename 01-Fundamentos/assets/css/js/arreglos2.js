let juegos = ['zelda','over','apex','assasin'];
console.log('Largo:', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[ juegos.length - 1];

console.log({ primero, ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

//push inserta un elemento nuevo al final del arreglo
let nueva = juegos.push( 'Hollow' );
console.log({ nueva, juegos });

//unshift insertamos un elmento al inicio del arrgelo
nueva = juegos.unshift('dead island')
console.log({ nueva, juegos});

//pop sirve para borrar un elemento en el arreglo
 let borrado = juegos.pop();
 console.log({borrado, juegos});

 let pos = 1;

 // splice borra elemento en especifico 
 let juegosb = juegos.splice(pos, 2);
console.log(juegosb, juegos);

//CaseSeNsItIvE
let apexIndex = juegos.indexOf('apex'); //Debe estar escrito el objecto igual 
console.log(apexIndex);


















































