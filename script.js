// Array de preguntas y respuestas
var preguntas = [
  {
    pregunta: "¿Cuál de los siguientes profetas fue arrojado a un foso lleno de leones?",
    respuestas: [
      { texto: "Daniel", correcta: true },
      { texto: "Moisés", correcta: false },
      { texto: "Isaías", correcta: false },
      { texto: "Jeremías", correcta: false },
    ],
  },
  {
    pregunta: "¿Quién fue el primer rey de Israel?",
    respuestas: [
      { texto: "David", correcta: false },
      { texto: "Saúl", correcta: true },
      { texto: "Salomón", correcta: false },
      { texto: "Josué", correcta: false },
    ],
  },
  {
    pregunta: "¿En qué libro de la Biblia se encuentra la historia de José y sus hermanos?",
    respuestas: [
      { texto: "Éxodo", correcta: false },
      { texto: "Números", correcta: false },
      { texto: "Génesis", correcta: true },
      { texto: "Levítico", correcta: false },
    ],
  },
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
  tarjetaTitulo.textContent = "FIN";
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
    document.getElementById("result").textContent = "Respuesta incorrecta 😬";
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
