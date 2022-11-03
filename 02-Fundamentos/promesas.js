

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

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

getEmpleado(id)
    .then(empleado => {
        getSalario(id).then(salario => {
            console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
        })
        .catch(err => console.log(err))
}).catch(err => console.log(err))