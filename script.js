// Array de preguntas y respuestas
var preguntas = [
  
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
    pregunta: "¿Cuál es la primera creación de Dios? Génesis 1:1-5", respuestas: [
       { texto: "El cielo", correcta: false },
      { texto: "La tierra", correcta: false },
      { texto: "La luz", correcta: true },
      { texto: "Los animales acuáticos", correcta: false },
     ],
  },

  {  pregunta: "¿En qué lugar se encuentran Rut y su suegra al inicio del libro de Rut? Rut 1:1",  respuestas:[ {texto: "Moab", correcta: true}, {texto: "Israel", correcta: false}, {texto: "Egipto", correcta: false}, {texto: "Jericó", correcta: false},],},
 

  { pregunta: "¿Quiénes fueron los primeros en visitar a Jesús después de su nacimiento? Lucas 2:8-20", respuestas:[{texto:"Pastores",correcta:true},{texto:"Reyes Magos",correcta:false},{texto:"Sacerdotes",correcta:false},{texto:"Discípulos de Juan el Bautista",correcta:false},],},

  { pregunta:"¿Cuál fue la primera tentación de Jesús en el desierto? Lucas 4:1-13", respuestas:[{texto:"Convertir piedras en pan",correcta:true},{texto:"Saltar del templo",correcta:false},{texto:"Adorar a Satanás",correcta:false},{texto:"Negar a Dios",correcta:false},],},

  {pregunta: "¿Qué se afirma en el Salmo 118:24 que el Señor ha hecho?", respuestas:[ {texto: "Creó el mundo", correcta: false}, {texto: "Sanó a los enfermos", correcta: false}, {texto: "Se ha levantado", correcta: true}, {texto: "Creó al hombre", correcta: false}, ],},
  

   { pregunta: "¿Qué es vanidad? Eclesiastés 1:2", respuestas: [ { texto: "La riqueza", correcta: false }, { texto: "La fama", correcta: false }, { texto: "Todo es vanidad", correcta: true }, { texto: "La sabiduría", correcta: false }, ], },

   { pregunta: "¿Qué hay para el hombre en todo su trabajo? Eclesiastés 3:9-13", respuestas: [ { texto: "Dolor", correcta: false }, { texto: "Gozo", correcta: true }, { texto: "Vergüenza", correcta: false }, { texto: "Frustración", correcta: false }, ], },
  
   { pregunta: "¿Qué es mejor que la luz? Eclesiastés 7:5", respuestas:[ {texto:"La riqueza.",correcta:false}, {texto:"El poder.",correcta:false}, {texto:"La fama.",correcta:false}, {texto:"La sabiduría.",correcta:true}, ],},
  
   { pregunta: "¿Qué es mejor que la vida? Eclesiastés 7:1-2", respuestas:[{texto:"El día de la muerte.",correcta:true},{texto:"La riqueza.",correcta:false},{texto:"El éxito.",correcta:false},{texto:"La fama.",correcta:false}, ],},
  
   { pregunta: "¿Qué es mejor que la risa? Eclesiastés 7:3-4", respuestas:[ {texto:"La indiferencia.",correcta:false}, {texto:"El llanto.",correcta:true}, {texto:"La arrogancia.",correcta:false},{texto:"La tristeza.",correcta:false}, ],},

  { pregunta: "¿Qué es una fuente de vida? Proverbios 4:23", respuestas: [ { texto: "El cerebro", correcta: false }, { texto: "Los pulmones", correcta: false }, { texto: "El corazón", correcta: true }, { texto: "Los riñones", correcta: false }, ], },

  { pregunta: "¿Qué es el comienzo de la sabiduría? Proverbios 1:7", respuestas: [ { texto: "El temor del Señor", correcta: true }, { texto: "La educación formal", correcta: false }, { texto: "La experiencia personal", correcta: false }, { texto: "La inteligencia innata", correcta: false }, ], },

  { pregunta: "¿Qué es el consejo? Proverbios 12:15", respuestas: [ { texto: "Una opinión personal", correcta: false }, { texto: "La sabiduría en acción", correcta: true }, { texto: "Un consejo financiero", correcta: false }, { texto: "Un consejo médico", correcta: false }, ], },
  
  { pregunta: "¿Qué es mejor que un hombre fuerte? Proverbios 16.32", respuestas:[{texto:"El que domina su espíritu.",correcta:true},{texto:"El que tiene mucho dinero.",correcta:false},{texto:"El que tiene muchos amigos.",correcta:false},{texto:"El que tiene mucho poder.",correcta:false},],},
  
  { pregunta: "¿Qué es el fruto de la humildad? Proverbios 22:4", respuestas: [ { texto: "La riqueza, el honor y la vida", correcta: true }, { texto: "La pobreza, la vergüenza y la muerte", correcta: false }, { texto: "La fama, el poder y el éxito", correcta: false }, { texto: "La arrogancia, la envidia y la maldad", correcta: false }, ], },

  { pregunta: "¿Cómo murió Judas Iscariote? Mateo 27:3-10", respuestas: [ { texto: "Fue lapidado", correcta: false }, { texto: "Murió de viejo", correcta: false }, { texto: "Fue quemado vivo", correcta: false },  { texto: "Se ahorcó", correcta: true }, ], },

  { pregunta: "¿Qué es un amigo verdadero? Proverbios 17:17", respuestas: [ { texto: "Un hermano en tiempos de angustia", correcta: true }, { texto: "Alguien que siempre está feliz", correcta: false }, { texto: "Alguien que nunca se enoja", correcta: false }, { texto: "Alguien que siempre tiene razón", correcta: false }, ], },
  
  { pregunta: "¿Qué es mejor que la ira? Proverbios 16:32", respuestas: [ { texto: "La venganza", correcta: false }, { texto: "El orgullo", correcta: false }, { texto: "La arrogancia", correcta: false }, { texto: "La paciencia", correcta: true } ], },
  { 

    pregunta: "¿Solo quién sabe la hora y día en la que Jesús vendrá?" , respuestas:  

[ { texto: "Los científicos", correcta: false },  

{ texto: "Los arqueólogos", correcta: false }, 

 { texto: "Los discípulos", correcta: false }, 

 { texto: "Dios", correcta: true}, ], 

  },

  {
    pregunta: "¿Qué animal es mencionado como el animal que salió del arca de Noé cuando las aguas comenzaron a ceder?" , respuestas: [ { texto: "Mariposa", correcta: false }, { texto: "Cuervo", correcta: false }, { texto: "Gaviota", correcta: false }, { texto: "Paloma", correcta: true } ]
  }, 

  {
    pregunta: '¿Qué seres vivos aparecen en el libro de Isaías como uno de los tres seres vivos que gritan "Santo, santo, santo es el Señor Dios Todopoderoso"?' , respuestas: [ { texto: "Querubines", correcta: false }, { texto: "Ángeles", correcta: false }, { texto: "Arcángeles", correcta: false }, { texto: "Serafines", correcta: true } ]
  },
  {
    pregunta: "¿Qué animal aparece en el libro de Éxodo como un castigo de Dios a Egipto y que finalmente llevó a su liberación?" , respuestas: [ { texto: "Mosquito", correcta: false }, { texto: "Sapo", correcta: true }, { texto: "Cocodrilo", correcta: false }, { texto: "Hormiga", correcta: false }  ]
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
