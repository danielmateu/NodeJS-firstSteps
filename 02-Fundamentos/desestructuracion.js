

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    getNombre() { 
        return `
        Nombre: ${this.nombre} ${this.apellido} 
        Poder: ${this.poder}
        `
    }
}

// console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const {nombre, apellido, poder, edad = 0} = deadpool
// 
// console.log(nombre, apellido, poder, edad);

function imrpimeHeroe({nombre, apellido, poder, edad = 0}) {
    // const {nombre, apellido, poder, edad = 0} = heroe
    nombre = 'Juan'
    console.log(nombre, apellido, poder, edad);
}

// imrpimeHeroe(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1, h2, h3] = heroes;

console.log(h3);