const aprobarPrestamo = require('./prestamo');

test('Préstamo NO aprobado para estudiante, con o sin deudas', () => {
    expect(aprobarPrestamo('E', 'S')).toBe('Préstamo NO aprobado');
    expect(aprobarPrestamo('E', 'N')).toBe('Préstamo NO aprobado');
}, 'Resultado esperado: Préstamo NO aprobado para estudiante');

test('Préstamo aprobado para trabajador, con o sin deudas', () => {
    expect(aprobarPrestamo('T', 'S')).toBe('Préstamo aprobado');
    expect(aprobarPrestamo('T', 'N')).toBe('Préstamo aprobado');
}, 'Resultado esperado: Préstamo aprobado para trabajador');

test('Préstamo aprobado para retirado sin deudas', () => {
    expect(aprobarPrestamo('R', 'N')).toBe('Préstamo aprobado');
}, 'Resultado esperado: Préstamo aprobado para retirado sin deudas');

test('Préstamo NO aprobado para retirado con deudas', () => {
    expect(aprobarPrestamo('R', 'S')).toBe('Préstamo NO aprobado');
}, 'Resultado esperado: Préstamo NO aprobado para retirado con deudas');

test('Retorna "Tipo de solicitante no válido" para entradas no reconocidas', () => {
    expect(aprobarPrestamo('X', 'N')).toBe('Tipo de solicitante no válido');
}, 'Resultado esperado: Tipo de solicitante no válido');
