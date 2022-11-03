//let y const crean variables locales. var las crea globales.


//Las const son más ligeras que las variables let, y las creamos cuando sabemos que su valor nunca va cambiar 
const nombre = 'Wolverine';

if(true){
    //Con let creamos variables dentro del scope y no afecta fuera de el
    const nombre=' Magneto'
    console.log(nombre);
}

console.log(nombre);