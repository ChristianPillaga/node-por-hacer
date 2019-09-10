const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}