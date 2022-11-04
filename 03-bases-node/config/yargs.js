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
    .option(
        'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: colors.random('Es el número de que limita la tabla')
    })
    .check((argv, options) => {
        // console.log('yargs', argv)
        if (isNaN(argv.b || argv.h)) {
            throw colors.red('La base y la longitud de la tabla deben ser un número')
        }
        return true;
    })
    .argv;

module.exports = argv;