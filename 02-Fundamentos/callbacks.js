
//Callbacks => funciones que se mandan como argumento a otra función

/* Printing "Hola mundo!" to the console after 1 second. */
// setTimeout(function(){
//     console.log('Hola mundo!')
// }, 1000);


const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Dani'
    }

    setTimeout(() => {
        callback(user)
    }, 1500)
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
})
