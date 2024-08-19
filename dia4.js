/**
Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).
A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.
Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.
 */

let numeroAAdivinar = Math.floor(Math.random() * 11);
//console.log(numeroAAdivinar);
let intentosTotales = 3;
let intentos = 1;
alert(
  `Bienvenido al juego de adivina que número estoy pensando!, tienes ${intentosTotales} intentos para descubrirlo.`
);
while (intentos <= intentosTotales) {
  let eleccion = prompt("Elija un número entre 0 y 10");
  if (numeroAAdivinar === parseInt(eleccion)) {
    alert(
      `Felicidades!!\nAcertaste en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }!\nEl número correcto era ${numeroAAdivinar}`
    );
    break;
  } else {
    if (intentos < intentosTotales) {
      alert(
        `Ese no era el número. Prueba de nuevo. Intentos restantes: ${
          intentosTotales - intentos
        }.`
      );
    }
    intentos++;
    console.log(intentos);
  }
}
if (intentos === 4) {
  alert(
    `Game Over, no te quedan más intentos. El número a adivinar era ${numeroAAdivinar}`
  );
}
