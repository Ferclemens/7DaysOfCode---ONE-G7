/*
En este último desafío, mi propuesta para ti es: crea tu propia calculadora, pero con un detalle muy importante: cada operación debe ser una función diferente en tu código.

Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.

Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la operación en cuestión.

Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".
*/

let calculadora = () => {
  let operacion = seleccionarOperacion();
  let datos;
  let nombreOp;
  let signo;
  let resultado;
  if (operacion === "1") {
    nombreOp = "SUMA";
    signo = "+";
    datos = solicitarDatos();
    resultado = suma(datos.num1, datos.num2);
  } else if (operacion === "2") {
    nombreOp = "RESTA";
    signo = "-";
    datos = solicitarDatos();
    resultado = resta(datos.num1, datos.num2);
  } else if (operacion === "3") {
    nombreOp = "MULTIPLICACION";
    signo = "*";
    datos = solicitarDatos();
    resultado = producto(datos.num1, datos.num2);
  } else if (operacion === "4") {
    nombreOp = "DIVISION";
    signo = "/";
    datos = solicitarDatos();
    if (datos.num2 != 0) {
      resultado = division(datos.num1, datos.num2);
    } else {
      alert("No se puede dividir un número por 0, intente de nuevo.");
      calculadora();
    }
  } else if (operacion === "5") {
    nombreOp = "";
    signo = "";
    resultado = null;
    return alert("Hasta la próxima");
  } else {
    alert("Error al seleccionar operación");
  }

  mostrarResultado(nombreOp, datos, signo, resultado);
};

//Seleccionar operación
let seleccionarOperacion = () => {
  let seleccion = prompt(`
        Qué operación desea ejecutar?
        **Para seleccionar utilice los números del teclado**.
        1 - Suma
        2 - Resta
        3 - Multiplicación
        4 - División
        5 - Salir
        `);
  while (isNaN(seleccion) || seleccion < 1 || seleccion > 5) {
    alert("Solo se permiten números del 1 al 5");
    seleccion = prompt(`
        Qué operación desea ejecutar?
        **Para seleccionar utilice los números del teclado**.
        1 - Suma
        2 - Resta
        3 - Multiplicación
        4 - División
        5 - Salir
        `);
  }
  return seleccion;
};

//pedir datos
let solicitarDatos = () => {
  let num1 = parseInt(
    prompt("Ingrese el primer número para la operación seleccionada")
  );
  let num2 = parseInt(
    prompt("Ingrese el segundo número para la operación seleccionada")
  );
  return { num1, num2 };
};

//operaciones
let suma = (num1, num2) => {
  return num1 + num2;
};
let resta = (num1, num2) => {
  return num1 - num2;
};
let division = (num1, num2) => {
  return num1 / num2;
};
let producto = (num1, num2) => {
  return num1 * num2;
};

//Mostrar resultado
let mostrarResultado = (nombreOp, datos, signo, resultado) => {
  if (resultado != undefined) {
    return alert(`
    Operación: ${nombreOp}
    ${datos.num1} ${signo} ${datos.num2} = ${resultado}`);
  }
};

//Ejecución
calculadora();
