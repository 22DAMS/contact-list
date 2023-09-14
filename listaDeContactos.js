const listaContactos = [
  "Travis Barker",
  "Tom Delonge",
  "Mark Hoppus",
  "Serj Tankian",
  "Daron Malakian",
];

let agregar = function (nuevoNombre) {
  listaContactos.push(nuevoNombre);
};

let borrar = function (num1, num2) {
  listaContactos.splice(num1, num2);
};

let imprimirLista = function () {
  for (contacto of listaContactos) console.log(contacto);
};

agregar("Danny Marin");
console.log(listaContactos);

borrar(2, 1);
console.log(listaContactos);

imprimirLista();
