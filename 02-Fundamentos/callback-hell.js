

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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((empleado) => empleado.id === id)?.name;

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`El empleado con el id ${id}, no existe`)
    }
}

const getSalario = (id, callback) => {

    const salario = salarios.find(salario => salario.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario no disponible`)
    }
}

const id = 10;

// console.log(getEmpleado(7))

getEmpleado(id, (error, empleado) => {

    if (error) {
        console.log('ERROR!');
        return console.log(error);
    }

    console.log('El empleado existe');
    console.log(empleado);

    getSalario(id, (error, salario) => {

        if (error) {
            console.log('ERROR');
            return console.log(error);
        }
        console.log(`El empleado ${empleado} tiene un salario de ${salario}€`);
    })

})


