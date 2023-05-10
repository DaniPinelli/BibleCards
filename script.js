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
var tarjetaActual = null;
var preguntasRestantes = preguntas.slice();

// Función para mostrar una tarjeta aleatoria
function mostrarTarjetaAleatoria() {
  if (preguntasRestantes.length === 0) {
    preguntasRestantes = preguntas.slice();
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
  contenedorTarjetas.innerHTML = "";
  contenedorTarjetas.appendChild(tarjeta);

  tarjetaActual = tarjeta;
}

// Func para manejar la respuesta seleccionada
function manejarRespuesta(evento) {
  var botonesRespuesta = tarjetaActual.querySelectorAll("button");
  botonesRespuesta.forEach(function(boton) {
    boton.disabled = true;
  });

  var respuestaSeleccionada = evento.target.dataset.correcta === "true";
  if (respuestaSeleccionada) {
    tarjetaActual.classList.add("bg-success");
    document.getElementById("result").textContent = "¡Respuesta correcta!";
  } else {
    tarjetaActual.classList.add("bg-danger");
    document.getElementById("result").textContent = "Respuesta incorrecta :(";
  }

  setTimeout(function() {
    document.getElementById("result").textContent = "";
  }, 1000);

  // Temporizador de 2 segundos para mostrar la siguiente pregunta
  setTimeout(function() {
    mostrarTarjetaAleatoria();
  }, 1000);
}

// Llamada a la función para mostrar la primera tarjeta al cargar la página
window.onload = function() {
  mostrarTarjetaAleatoria();
};