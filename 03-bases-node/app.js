
const { crearArchivo } = require('./helpers/multiplicar');

// 5 x 1 = 5
// 5 x 2 = 5
// ... and
// 5 x 10 = 50

console.clear()

console.log(process.argv);

const [ , ,arg3 = 'base=5'] = process.argv;
const [ , base = 1] = arg3.split('=');
// console.log(base);



// const base = 4;


crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));






