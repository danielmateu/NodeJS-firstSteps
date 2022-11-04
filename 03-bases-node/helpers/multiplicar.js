const fs = require('fs');

const crearArchivo = async (base = 5, listar = false) => {

    try {

        
        let salida = '';
        
        for (let i = 1; i <= 10; i++) {
            let operacion = i * base;
            salida += `${base} X ${i} = ${operacion}\n`;
            
        }
        
        if(listar){

            console.log('===================')
            console.log('   Tabla del: ', base)
            console.log('===================')

            console.log(salida)
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`;
    } catch (error) {
        throw (error)
    }
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}