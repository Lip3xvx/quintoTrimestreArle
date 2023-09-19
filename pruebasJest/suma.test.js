const {suma, resta, perimetroTriangulo, numeroNegativo, numeroPar,stringVacio, division, multiplicar,areaTriangulo } = require('./suma.cjs')

test('suma esperada', () => {
  expect(suma(2, 3)).toBe(5);
});

test('division esperada', () => {
  expect(resta(5, 2)).toBe(3);
});

test('cálculo del perímetro de un triángulo', () => {
  expect(perimetroTriangulo(3, 4, 5)).toBe(12);
});

test('verificar si un número es negativo', () => {
  expect(numeroNegativo(-5)).toBe(true);
  expect(numeroNegativo(10)).toBe(false);
});

test('verificar si una cadena está vacía', () => {
  expect(stringVacio('')).toBe(true);
  expect(stringVacio('Hola')).toBe(false);
});

test('verificar si un número es par', () => {
  expect(numeroPar(4)).toBe(true);
  expect(numeroPar(7)).toBe(false);
});

test('división de dos números', () => {
  expect(division(10, 2)).toBe(5);
});

test('multiplicación de dos números', () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test('cálculo del área de un triángulo', () => {
  expect(areaTriangulo(6, 4)).toBe(12);
});
