const filtrarProductos = require('../js/productos');

// Escribir los tests debajo
test('Array vacío de productos', () => {
  expect(filtrarProductos([], 'calzado')).toEqual([]);
});

test('Categoría no existente', () => {
  const productos = [{ nombre: 'Camisa', categoria: 'ropa' }];
  expect(filtrarProductos(productos, 'calzado')).toEqual([]);
});

test('Categoría con coincidencias', () => {
  const productos = [
    { nombre: 'Zapatillas', categoria: 'calzado' },
    { nombre: 'Sandalias', categoria: 'calzado' },
    { nombre: 'Camisa', categoria: 'ropa' }
  ];
  expect(filtrarProductos(productos, 'calzado')).toEqual([
    { nombre: 'Zapatillas', categoria: 'calzado' },
    { nombre: 'Sandalias', categoria: 'calzado' }
  ]);
});

test('Categoría vacía', () => {
  const productos = [{ nombre: 'Zapatillas', categoria: 'calzado' }];
  expect(filtrarProductos(productos, '')).toEqual([]);
});

