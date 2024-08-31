const readlineSync = require('readline-sync');

function aprobarPrestamo(tipoSolicitante, tieneDeudas) {
    if (tipoSolicitante === 'E') {
        return 'Préstamo NO aprobado';
    } else if (tipoSolicitante === 'T') {
        return 'Préstamo aprobado';
    } else if (tipoSolicitante === 'R') {
        return tieneDeudas === 'S' ? 'Préstamo NO aprobado' : 'Préstamo aprobado';
    } else {
        return 'Tipo de solicitante no válido';
    }
}

// Ejemplo de uso
const tipoSolicitante = readlineSync.question("Ingrese el tipo de solicitante (E para Estudiante, T para Trabajador, R para Retirado): ");
const tieneDeudas = readlineSync.question("¿Tiene deudas? (S para Sí, N para No): ");

console.log(aprobarPrestamo(tipoSolicitante, tieneDeudas));

module.exports = aprobarPrestamo;