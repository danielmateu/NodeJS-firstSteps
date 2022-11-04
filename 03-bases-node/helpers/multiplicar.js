const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida, consola = '';
        
        for (let i = 0; i <= hasta; i++) {
            let operacion = i * base;
            salida += `${base} X ${i} = ${operacion}\n`
            consola += `${base} X ${i} = ${operacion}\n`
            
        }
        
        if(listar){

            console.log(colors.zebra('==================='))
            console.log(colors.rainbow('   Tabla del: '), base)
            console.log(colors.blue('==================='))

            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return colors.trap(`tabla-${base}.txt`);
        
    } catch (error) {
        throw (error)
    }
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}