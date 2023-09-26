//Lista de contactos (Array de objetos).
const listaContactos = [
  {
    id: 100001,
    nombres: "Travis Martin",
    apellidos: "Barker Hells",
    telefono: 3102543456,
    ubicaciones: { ciudad: "Bogotá", dirección: "cl 1 # 10 - 100" },
  },
  {
    id: 100002,
    nombres: "Tom Edward",
    apellidos: "Delonge Ray",
    telefono: 3212673456,
    ubicaciones: { ciudad: "Cali", dirección: "cl 2 # 19 - 20" },
  },
  {
    id: 100003,
    nombres: "Mark Peter",
    apellidos: "Hoppus Diaz",
    telefono: 3134096791,
    ubicaciones: { ciudad: "Medellin", dirección: "cr 43 # 39 - 02" },
  },
  {
    id: 100004,
    nombres: "Serj Daniel",
    apellidos: "Tankian Hoff",
    telefono: 3114569873,
    ubicaciones: { ciudad: "Bucaramanga", dirección: "tv 2 # 23 - 15" },
  },
  {
    id: 100005,
    nombres: "Daron Douglas",
    apellidos: "Malakian Florez",
    telefono: 3207653412,
    ubicaciones: { ciudad: "Pereira", dirección: "cl 10 # 43 - 04" },
  },
];

//Agregar un contacto.
let agregar = function (cont) {
  listaContactos.push(cont);
};

//Borrar un contacto.
let borrar = function (ind, cant) {
  listaContactos.splice(ind, cant);
};

//Imprimir lista de contactos.
let imprimirLista = function () {
  for (contacto of listaContactos) console.log(contacto);
};

//Actualizar un contacto.
let actualizarContacto = function (indice, value) {
  let indx;
  for (let i = 0; i < listaContactos.length; i++) {
    if (indice === listaContactos[i].id) {
      indx = i;
      break;
    }
  }

  if (indx >= 0) {
    let nuevaLista = Object.assign(listaContactos[indx], value);
    console.log(
      `El contacto ${listaContactos[indx].nombres} con id ${indice} fue actualizado correctamente`
    );
    console.log("Usuario actualizado", nuevaLista);
  } else {
    console.log("Contacto no encontrado");
  }
};

//Uso de funciones.
agregar({
  id: 100006,
  nombres: "Danny Alexander",
  apellidos: "Marin Sanchez",
  telefono: 3214070851,
  ubicaciones: { ciudad: "Villavicencio", dirección: "Cl 12 # 18c - 30" },
});
console.log(listaContactos);

borrar(3, 1);
console.log(listaContactos);

imprimirLista();

actualizarContacto(100002, { nombres: "Henry Luis" });
