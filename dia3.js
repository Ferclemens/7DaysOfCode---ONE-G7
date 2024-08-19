/*
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
 
Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.

Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.

Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender y desarrollarse en el área de programación.
Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.
*/
alert("Bievenido!");
let especializacion;
let continuarEstudiosEn;
let tecnologiasRes;
let tecnologias = [];
let respuesta = prompt(
  "Ingrese por cuál rama quiere seguir sus estudios en desarrollo de software.\n1- Front-End\n2- Back-End"
);
while (respuesta !== "1" && respuesta !== "2") {
  respuesta = prompt(
    "Seleccione la respuesta utilizando el boton 1 o 2.\nIngrese por cual rama quiere seguir sus estudios en desarrollo de software.\n1- Front-End\n2- Back-End"
  );
}
if (respuesta === "1") {
  respuesta = "Front-End";
  especializacion = prompt(
    "Buena elección!. Como Front-End, ¿qué prefieres aprender?\n1- React\n2- Vue"
  );
  while (especializacion !== "1" && especializacion !== "2") {
    especializacion = prompt(
      "Seleccione la respuesta utilizando el boton 1 o 2.\n¿Qué prefieres aprender?\n1- React\n2- Vue"
    );
  }
  if (especializacion === "1") {
    especializacion = "React";
  } else if (especializacion === "2") {
    especializacion = "Vue";
  }
} else if (respuesta === "2") {
  respuesta = "Back-End";
  especializacion = prompt(
    "Buena elección!. Como Back-End, ¿qué prefieres aprender?\n1- C#\n2- Java"
  );
  while (especializacion !== "1" && especializacion !== "2") {
    especializacion = prompt(
      "Seleccione la respuesta utilizando el boton 1 o 2.\n¿Qué prefieres aprender?\n1- C#\n2- Java"
    );
  }
  if (especializacion === "1") {
    especializacion = "C#";
  } else if (especializacion === "2") {
    especializacion = "Java";
  }
}
continuarEstudiosEn = prompt(
  "¿Desea seguir especializándose en el área elegida o convertirse en Fullstack?.\n1- Especialización\n2- Fullstack"
);
while (continuarEstudiosEn !== "1" && continuarEstudiosEn !== "2") {
  continuarEstudiosEn = prompt(
    "Seleccione la respuesta utilizando el boton 1 o 2.\n¿Desea especializarse en el área elegida o convertirse en Fullstack?\n1- Especialización\n2- Fullstack"
  );
}
if (continuarEstudiosEn === "1") {
  continuarEstudiosEn = "Especialización";
} else if (continuarEstudiosEn === "2") {
  continuarEstudiosEn = "Fullstack";
}
tecnologiasRes = prompt(
  "Escriba a continuación en qué tecnologías le gustaría especializarse o conocer?.\nPara salir presione 0."
);
while (tecnologiasRes !== "0") {
  alert("Buena elección!");
  tecnologias.push(tecnologiasRes);
  console.log(tecnologias);
  tecnologiasRes = prompt(
    "¿Hay alguna otra tecnología que te gustaría aprender?.\nPara salir presione 0."
  );
}
let listadoDeTecnologias = "";
for (let i = 0; i < tecnologias.length; i++) {
  listadoDeTecnologias += `${i + 1} - ${tecnologias[i]}\n`;
}
alert(
  `Genial!, Sus elecciones fueron:\nRama: ${respuesta}\nEspecialización: ${especializacion}\nTecnologías:\n${listadoDeTecnologias}`
);
