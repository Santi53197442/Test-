const filtrarProductos = require('../js/productos');

// Escribir los tests debajo
test('Array vacío de productos', () => {
  expect(filtrarProductos([], 'pantalones')).toEqual([]);
});

test('Categoría no existente', () => {
  const productos = [{
    "id": "camiseta-08",
    "titulo": "Remera 8",
    "imagen": "./img/remera-08.jpg",
    "categoria": "remeras",
    "precio": 1000
  }];
  expect(filtrarProductos(productos, 'sombreros')).toEqual([]);
});

test('Categoría con coincidencias en dos', () => {
  const productos = [
    {
      "id": "pantalon-05",
      "titulo": "Pantalón 05",
      "imagen": "./img/pantalon-05.png",
      "categoria": "pantalones",
      "precio": 1000
  },{
    "id": "pantalon-06",
    "titulo": "Pantalón 06",
    "imagen": "./img/pantalon-06.png",
    "categoria": "pantalones",
    "precio": 1000
},{
  "id": "camiseta-08",
  "titulo": "Remera 8",
  "imagen": "./img/remera-08.jpg",
  "categoria": "remeras",
  "precio": 1000
},];
  expect(filtrarProductos(productos, 'pantalones')).toEqual([
    {
      "id": "pantalon-05",
      "titulo": "Pantalón 05",
      "imagen": "./img/pantalon-05.png",
      "categoria": "pantalones",
      "precio": 1000
  },{
    "id": "pantalon-06",
    "titulo": "Pantalón 06",
    "imagen": "./img/pantalon-06.png",
    "categoria": "pantalones",
    "precio": 1000
}
  ]);
});

test('Categoría vacía', () => {
  const productos = [{
    "id": "abrigo-05",
    "titulo": "Campera 5",
    "imagen": "./img/campera-05.jpg",
    "categoria": "camperas",
    "precio": 1000
},];
  expect(filtrarProductos(productos, '')).toEqual([]);
});

test('Categoría con coincidencias en solo una', () => {
  const productos = [
    {
      "id": "pantalon-05",
      "titulo": "Pantalón 05",
      "imagen": "./img/pantalon-05.png",
      "categoria": "pantalones",
      "precio": 1000
  },{
    "id": "pantalon-06",
    "titulo": "Pantalón 06",
    "imagen": "./img/pantalon-06.png",
    "categoria": "pantalones",
    "precio": 1000
},{
  "id": "camiseta-08",
  "titulo": "Remera 8",
  "imagen": "./img/remera-08.jpg",
  "categoria": "remeras",
  "precio": 1000
},{
  "id": "abrigo-01",
  "titulo": "Campera 1",
  "imagen": "./img/campera-01.jpg",
  "categoria": "camperas",
  "precio": 1000
},];
expect(filtrarProductos(productos, 'camperas')).toEqual([
  {
    "id": "abrigo-01",
    "titulo": "Campera 1",
    "imagen": "./img/campera-01.jpg",
    "categoria": "camperas",
    "precio": 1000
  },
]);
});
