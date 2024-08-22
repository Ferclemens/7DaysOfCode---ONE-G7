/*
En este último desafío, mi propuesta para ti es: crea tu propia calculadora, pero con un detalle muy importante: cada operación debe ser una función diferente en tu código.

Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.

Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la operación en cuestión.

Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".
*/
const header = `
    ---------------------------------------------------------------------
    -                     Calcubot (potenciado con IA)                  -
    ---------------------------------------------------------------------
`;
let body = `
    

`;
let calculadora = () => {
  let operacion = seleccionarOperacion();
  console.log(typeof operacion);

  if (operacion === "1") {
    suma();
  } else if (operacion === "2") {
    resta();
  } else if (operacion === "3") {
    producto();
  } else if (producto === "4") {
    division();
  }
};
//Seleccionar operación
let seleccionarOperacion = () => {
  let seleccion = prompt(`
        Bienvenido humano!    
        Qué operación desea ejecutar?
        **Para seleccionar utilice los números del teclado**.
        1 - Suma
        2 - Resta
        3 - Producto
        4 - División
        `);
  while (seleccion) {
    if (isNaN(seleccion)) {
      alert("NO!NO!: solo se permiten números");
      seleccion = prompt(`
        Bienvenido humano!    
        Qué operación desea ejecutar?
        **Para seleccionar utilice los números del teclado**.
        1 - Suma
        2 - Resta
        3 - multiplicación
        4 - División
        `);
    } else {
      return seleccion;
    }
  }
};

//pedir datos
let solicitarDatos = () => {
  let num1 = prompt("Ingrese el primer número para la operación seleccionada");
  let num2 = prompt("Ingrese el segundo número para la operación seleccionada");
  return num1, num2;
};
//Desplegar
function display(action) {
  return action;
}
let mostrarResultado = () => {};

let suma = (num1, num2) => {
  console.log("suma");
};
let resta = (num1, num2) => {};
let division = (num1, num2) => {};
let producto = (num1, num2) => {};

//Ejecución
display(calculadora());
