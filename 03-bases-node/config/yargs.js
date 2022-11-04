const colors = require('colors/safe');

const argv = require('yargs')
    .option(
        'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: colors.random('Es la base de la tabla de multiplicar')
    })
    .option(
        'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: colors.random('Muestra la tabla en consola')
    })
    .check((argv, options) => {
        // console.log('yargs', argv)
        if (isNaN(argv.b)) {
            throw colors.red('La base debe ser un número')
        }
        return true;
    })
    .argv;

module.exports = argv;