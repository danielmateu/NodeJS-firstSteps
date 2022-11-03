

const empleados = [
    {
        id: 1,
        name: 'Dani'
    },
    {
        id: 2,
        name: 'Silvia'
    },
    {
        id: 3,
        name: 'Nuk'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1550
    },
    {
        id: 2,
        salario: 2550
    },
    {
        id: 3,
    },
];

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find((empleado) => empleado.id === id)?.name;

        (empleado) ? resolve(empleado) : reject(`No existe ningún empleado con el id ${id}`);

    });
}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find(salario => salario.id === id)?.salario;

        (salario) ? resolve(salario) : reject('El salario no está disponible')
    })

}

const id = 3;

const getInfoUsuario = async () => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario de ${empleado} es ${salario}`
    } catch (error) {
        throw (error)
    }
}

getInfoUsuario(id).then(msg =>{ 
    console.log('TODO BIEN!')
    console.log(msg)
}).catch(error => {
    console.log('TODO MAL!')
    console.log(error)}
    )