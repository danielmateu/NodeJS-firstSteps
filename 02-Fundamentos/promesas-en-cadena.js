

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

const id = 1;
let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => console.log(err));
