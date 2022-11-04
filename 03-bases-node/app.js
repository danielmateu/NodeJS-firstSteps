
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors/safe');

console.clear()

console.log(colors.green('base: yargs'), argv.b)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo), colors.green.underline('creado')))
    .catch(err => console.log(err));






