const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 5, listar = false) => {

    try {

        
        let salida = '';
        
        for (let i = 1; i <= 10; i++) {
            let operacion = i * base;
            salida += base + colors.random(" X ") + i + colors.random(" = ") + operacion +"\n";
            
        }
        
        if(listar){

            console.log(colors.zebra('==================='))
            console.log(colors.rainbow('   Tabla del: '), base)
            console.log(colors.blue('==================='))

            console.log(salida)
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida)

        return colors.trap(`tabla-${base}.txt`);
    } catch (error) {
        throw (error)
    }
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}