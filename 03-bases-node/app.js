

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
    .option(
        'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option(
        'l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .check((argv, options) => {
        // console.log('yargs', argv)
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }
        return true;
    })
    .argv;

console.clear()

console.log(argv);

console.log('base: yargs', argv.b)

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));






