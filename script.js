// Array de preguntas y respuestas
var preguntas = [
  {
    pregunta: "¿Qué significa la parábola del sembrador? Mateo 13:3-9" , respuestas: [ { texto: "Que la semilla nunca crecerá si no se riega", correcta: false }, { texto: "Que la semilla representa la Palabra de Dios y la tierra representa el corazón de las personas", correcta: true }, { texto: "Que la semilla es muy importante en vida de los agricultores", correcta: false }, { texto: "Que la semilla cae en buen terreno", correcta: false }, ],
  },
  {
    pregunta: "¿Quién fue el primer rey de Israel? Samuel 10:20-24 ",
    respuestas: [
      { texto: "David", correcta: false },
      { texto: "Saúl", correcta: true },
      { texto: "Salomón", correcta: false },
      { texto: "Samuel", correcta: false },
    ],
  },
  {
    pregunta: "¿Cuál es la primera creación de Dios? Génesis 1:1-5 ", respuestas: [
       { texto: "El cielo", correcta: false },
      { texto: "La tierra", correcta: false },
      { texto: "La luz", correcta: true },
      { texto: "Los animales acuáticos", correcta: false },
     ],
  },
  {
    pregunta: "¿Qué dice Proverbios 6:6-8 sobre la naturaleza?" , respuestas: [ { texto: "Que los animales son más sabios que los seres humanos", correcta: false }, { texto: "Que los insectos son perezosos", correcta: false }, { texto: "Que los hormigas son un ejemplo de sabiduría y laboriosidad", correcta: true }, { texto: "Que las plantas son más importantes que los animales", correcta: false }, ],
  },
  {
    pregunta: "¿Qué dice Salmo 19:1-2 sobre la creación?" , respuestas: [ { texto: "Que la creación es un error de Dios", correcta: false }, { texto: "Que la creación es más importante que el Creador", correcta: false }, { texto: "Que la creación muestra la gloria de Dios", correcta: true }, { texto: "Que la creación es un reflejo del pecado en el mundo", correcta: false }, ],
  },
  {
    pregunta: "¿Cómo describe Proverbios 8:22-31 la creación?" , respuestas: [ { texto: "Como algo feo y sin valor", correcta: false }, { texto: "Como algo creado por los seres humanos", correcta: false }, { texto: "Como algo creado por la sabiduría de Dios", correcta: true }, { texto: "Como algo malo que debe ser destruido", correcta: false }, ],
  },
  {
    pregunta: "¿Qué dice Romanos 8:18-23 sobre la creación?" , respuestas: [ { texto: "Que la creación es perfecta y no necesita ser cambiada", correcta: false }, { texto: "Que la creación es temporal y no importa", correcta: false }, { texto: "Que la creación está sufriendo y espera ser liberada de la corrupción", correcta: true }, { texto: "Que la creación es una ilusión y no existe", correcta: false }, ],
  },
  { 

    pregunta: "¿Solo quién sabe la hora y día en la que Jesús vendrá?" , respuestas:  

[ { texto: "Los científicos", correcta: false },  

{ texto: "Los arqueólogos", correcta: false }, 

 { texto: "Los discípulos", correcta: false }, 

 { texto: "Dios", correcta: true}, ], 

  } 

];

// Variables globales
var preguntasRestantes = preguntas.slice();
var tarjetaActual = null;

// Función para mostrar la tarjeta de pregunta o la tarjeta de fin
function mostrarTarjeta() {
  var contenedorTarjetas = document.getElementById("card-container");
  contenedorTarjetas.innerHTML = "";

  if (preguntasRestantes.length === 0) {
    mostrarTarjetaFin();
  } else {
    mostrarTarjetaAleatoria();
  }
}

// Función para mostrar una tarjeta de pregunta aleatoria
function mostrarTarjetaAleatoria() {
  if (preguntasRestantes.length === 0) {
    mostrarTarjetaFin();
    return;
  }

  var indicePregunta = Math.floor(Math.random() * preguntasRestantes.length);
  var pregunta = preguntasRestantes[indicePregunta];

  preguntasRestantes.splice(indicePregunta, 1);

  var tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "mb-4");
  var tarjetaBody = document.createElement("div");
  tarjetaBody.classList.add("card-body");
  var tarjetaTitulo = document.createElement("h5");
  tarjetaTitulo.classList.add("card-title");
  tarjetaTitulo.textContent = pregunta.pregunta;
  tarjetaBody.appendChild(tarjetaTitulo);
  pregunta.respuestas.forEach(function(respuesta) {
    var botonRespuesta = document.createElement("button");
    botonRespuesta.classList.add("btn", "btn-primary", "btn-block", "mb-2");
    botonRespuesta.textContent = respuesta.texto;
    botonRespuesta.dataset.correcta = respuesta.correcta;
    botonRespuesta.addEventListener("click", manejarRespuesta);
    tarjetaBody.appendChild(botonRespuesta);
  });
  tarjeta.appendChild(tarjetaBody);

  var contenedorTarjetas = document.getElementById("card-container");
  contenedorTarjetas.appendChild(tarjeta);

  tarjetaActual = tarjeta;
}

// Func para mostrar la tarjeta de fin
function mostrarTarjetaFin() {
  var tarjetaFin = document.createElement("div");
  tarjetaFin.classList.add("card", "text-center", "mb-4");
  var tarjetaBody = document.createElement("div");
  tarjetaBody.classList.add("card-body");
  var tarjetaTitulo = document.createElement("h5");
  tarjetaTitulo.classList.add("card-title");
  tarjetaTitulo.textContent = "Game Over";
  tarjetaBody.appendChild(tarjetaTitulo);
  var botonReiniciar = document.createElement("button");
  botonReiniciar.classList.add("btn", "btn-success");
  botonReiniciar.textContent = "Reiniciar";
  botonReiniciar.addEventListener("click", reiniciarPreguntas);
  tarjetaBody.appendChild(botonReiniciar);
  tarjetaFin.appendChild(tarjetaBody);

  var contenedorTarjetas = document.getElementById("card-container");
  contenedorTarjetas.appendChild(tarjetaFin);

  tarjetaActual = null;
}

// Func para manejar la respuesta seleccionada
function manejarRespuesta(evento) {
  var botonesRespuesta = tarjetaActual.querySelectorAll("button");
  botonesRespuesta.forEach(function(boton) {
    boton.disabled = true;
    if (boton.dataset.correcta !== "true") {
      boton.classList.add("bg-light");
    }
  });

  var respuestaSeleccionada = evento.target.dataset.correcta === "true";
  if (respuestaSeleccionada) {
    tarjetaActual.classList.add("bg-success");
    document.getElementById("result").textContent = "👍🏻";
  } else {
    tarjetaActual.classList.add("bg-danger");
    document.getElementById("result").textContent = "😬";
  }

  setTimeout(function() {
    document.getElementById("result").textContent = "";
  }, 1800);

  // Temporizador de 2 segundos para mostrar la siguiente pregunta o la tarjeta de fin
  setTimeout(function() {
    mostrarTarjeta();
  }, 1800);
}

// Func para reiniciar las preguntas
function reiniciarPreguntas() {
  preguntasRestantes = preguntas.slice();
  mostrarTarjeta();
}

// Llamada a la función para mostrar la primera tarjeta al cargar la página
window.onload = function() {
  mostrarTarjeta();
};
