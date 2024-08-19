/*
Debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, y debes poder responder con "sí" o "no".
A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".
Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.
Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

Si añades a tu lista:
banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.

El programa debería imprimir, por ejemplo:
Lista de compras:
Frutas: banana, tomate, manzana, uva, aguacate
Lácteos: leche vegetal, leche de vaca, leche en polvo
Congelados: 
Dulces: chicle y gominola

*/
let alimento;
let agregarAlimento;
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
  console.log(categoria);
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
}
alert(
  `Lista de alimentos:\nFrutas: ${frutas.join(", ")}\nLácteos: ${lacteos.join(
    ", "
  )}\nCongelados: ${congelados.join(", ")}\nDulces: ${dulces.join(
    ", "
  )}\nCarnes: ${carnes.join(", ")}\nOtros: ${otros.join(", ")}`
);
