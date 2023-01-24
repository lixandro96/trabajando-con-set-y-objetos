const datosPersonales = {
    nombre:"Lixandro",
    apellido:"Beato",
    edad:26,
    altura:1.8,
    eresDesarrollador:true
};

const miEdad = datosPersonales.edad;

const miArray = [datosPersonales,{nombre:"Roberto",apellido:"Santana",edad:32,
altura:1.7,eresDesarrollador:false},{nombre:"steve",apellido:"vega",edad:24,
altura:1.65,eresDesarrollador:true}];

const listaOrdenada = miArray.sort((edad1,edad2) => edad2.edad - edad1.edad);
console.log(listaOrdenada)