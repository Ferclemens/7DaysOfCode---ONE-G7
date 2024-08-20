/*
¿Recuerdas el pequeño programa que creaste ayer para hacer tu propia lista de compras? ¡Hoy tu desafío es hacerlo aún más interesante!

Ya viste cómo trabajar con arrays de forma sencilla, añadiendo elementos a tu lista de compras.
Otra operación muy común es la eliminación de elementos de la lista, y por eso es muy importante que sepas cómo hacerlo.
Pensándolo bien, existen muchas maneras de eliminar un elemento de una lista. Puedes eliminar el primer elemento, el último, o cualquier otro del medio de la lista. Cada una de estas operaciones tiene su propio método en la documentación de arrays de Javascript. Vamos a hablar más sobre estos métodos en la sección de "Consejos".

Deberás crear la opción de eliminar algún elemento de la lista, que se mostrará junto con la pregunta: “¿deseas añadir un alimento a la lista de compras?”.

A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos presentes en la lista actual, y la persona deberá escribir cuál de ellos desea eliminar.

Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación de que el elemento realmente ya no está allí.

Finalmente, el programa volverá al ciclo inicial de preguntas.

Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.

Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”.

Recuerda que la opción de eliminar un elemento solo deberá estar disponible a partir del momento en que exista al menos un elemento en la lista de compras.
*/

let alimento;
let agregarAlimento;
let quitarAlimento = "no";
let alimentoAQuitar;
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let carnes = [];
let otros = [];
let categorias = [
  "frutas",
  "lacteos",
  "congelados",
  "dulces",
  "carnes",
  "otros",
];
let categoria;
alert("Bienvenido a la lista para el super");
agregarAlimento = prompt(
  "¿Desea ingresar un alimento a la lista?\nResponda con 'si' o 'no'"
).toLowerCase();
while (agregarAlimento !== "si" && agregarAlimento !== "no") {
  agregarAlimento = prompt(
    "Tipee si o no para continuar.\nDesea agregar otro alimento? responda con 'si' o 'no'"
  );
}
while (agregarAlimento === "si") {
  alimento = prompt("Escriba el alimento que desea agrear a la lista: ");
  categoria = parseInt(
    prompt(
      "En que categoría desea guardar el alimento? Seleccione presionando el número correspondiente:\n1-Frutas\n2-Lácteos\n3-Congelados\n4-Dulces\n5-Carnes\n6-otros"
    )
  );
  //console.log(categoria);
  while (isNaN(categoria) || categoria < 1 || categoria > categorias.length) {
    categoria = parseInt(
      prompt(
        "Seleccione un elemento de la lista con su número correspondiente.\nEn que categoría desea guardar el alimento? \n1-Frutas\n2-Lácteos\n3-Congelados\n4-Dulces\n5-Carnes\n6-otros"
      )
    );
  }
  if (categoria === 1) {
    frutas.push(alimento);
  } else if (categoria === 2) {
    lacteos.push(alimento);
  } else if (categoria === 3) {
    congelados.push(alimento);
  } else if (categoria === 4) {
    dulces.push(alimento);
  } else if (categoria === 5) {
    carnes.push(alimento);
  } else if (categoria === 6) {
    otros.push(alimento);
  }
  agregarAlimento = prompt(
    "Desea agregar otro alimento? responda con 'si' o 'no'"
  ).toLowerCase();
  //QUITAR ALIMENTO DE LA LISTA
  if (agregarAlimento === "no") {
    quitarAlimento = prompt(
      "Desea quitar un alimento de la lista? responda con 'si' o 'no'"
    ).toLowerCase();
  }
  while (quitarAlimento !== "si" && quitarAlimento !== "no") {
    quitarAlimento = prompt(
      "Tipee si o no para continuar.\nDesea quitar un alimento de la lista? responda con 'si' o 'no'"
    );
  }
  while (quitarAlimento === "si") {
    alimentoAQuitar = prompt(
      `Lista de alimentos:\nFrutas: ${frutas.join(
        ", "
      )}\nLácteos: ${lacteos.join(", ")}\nCongelados: ${congelados.join(
        ", "
      )}\nDulces: ${dulces.join(", ")}\nCarnes: ${carnes.join(
        ", "
      )}\nOtros: ${otros.join(
        ", "
      )}\nEscriba el alimento que desea quitar de la lista: `
    );
    if (frutas.includes(alimentoAQuitar)) {
      frutas = frutas.filter((alimento) => alimento != alimentoAQuitar);
      alert("Elemento eliminado con éxito!");
    } else if (lacteos.includes(alimentoAQuitar)) {
      lacteos = lacteos.filter((alimento) => alimento != alimentoAQuitar);
      alert("Elemento eliminado con éxito!");
    } else if (congelados.includes(alimentoAQuitar)) {
      congelados = congelados.filter((alimento) => alimento != alimentoAQuitar);
      alert("Elemento eliminado con éxito!");
    } else if (dulces.includes(alimentoAQuitar)) {
      dulces = dulces.filter((alimento) => alimento != alimentoAQuitar);
      alert("Elemento eliminado con éxito!");
    } else if (carnes.includes(alimentoAQuitar)) {
      carnes = carnes.filter((alimento) => alimento != alimentoAQuitar);
      alert("Elemento eliminado con éxito!");
    } else if (otros.includes(alimentoAQuitar)) {
      otros = otros.filter((alimento) => alimento != alimentoAQuitar);
      alert("Elemento eliminado con éxito!");
    } else {
      alert("El elemento NO se encuentra en la lista de super");
    }
    quitarAlimento = prompt(
      "Desea quitar otro alimento de la lista? responda con 'si' o 'no'"
    ).toLowerCase();
    agregarAlimento = prompt(
      "Desea agregar un alimento a la lista? responda con 'si' o 'no'"
    ).toLowerCase();
  }
}
alert(
  `Lista de alimentos:\nFrutas: ${frutas.join(", ")}\nLácteos: ${lacteos.join(
    ", "
  )}\nCongelados: ${congelados.join(", ")}\nDulces: ${dulces.join(
    ", "
  )}\nCarnes: ${carnes.join(", ")}\nOtros: ${otros.join(", ")}`
);
