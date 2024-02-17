// Array de preguntas y respuestas
var preguntas = [

  {
    pregunta: "¿A qué ciudad fue perseguida la iglesia después de la muerte de Esteban? (Hechos 8:1-4)",
    respuestas: [
      { texto: "Roma", correcta: false },
      { texto: "Antioquía", correcta: true },
      { texto: "Jerusalén", correcta: false },
      { texto: "Éfeso", correcta: false },
    ],
  },
  {
    pregunta: "¿Quién fue el apóstol que tuvo una visión en Jope con animales impuros? (Hechos 10:9-23)",
    respuestas: [
      { texto: "Pablo", correcta: false },
      { texto: "Andrés", correcta: false },
      { texto: "Pedro", correcta: true },
      { texto: "Juan", correcta: false },
    ],
  },
  {
    pregunta: "¿Cuál fue el nombre del centurión romano que se convirtió al cristianismo? (Hechos 10:24-48)",
    respuestas: [
      { texto: "Cornelio", correcta: true },
      { texto: "Félix", correcta: false },
      { texto: "Herodes", correcta: false },
      { texto: "Agripa", correcta: false },
    ],
  },
  {
    pregunta: "¿Cómo fue muerto el apóstol Santiago? (Hechos 12:1-2)",
    respuestas: [
      { texto: "Ahogado", correcta: false },
      { texto: "Decapitado", correcta: true },
      { texto: "Crucificado", correcta: false },
      { texto: "Apedreado", correcta: false },
    ],
  },
  {
    pregunta: "¿Quién liberó a Pedro de la prisión milagrosamente? (Hechos 12:3-17)",
    respuestas: [
      { texto: "Juan", correcta: false },
      { texto: "Pablo", correcta: false },
      { texto: "Un soldado", correcta: false },
      { texto: "Un ángel", correcta: true },
    ],
  },
  {
    pregunta: "¿Qué apóstol fue enviado a predicar al eunuco etíope? (Hechos 8:26-40)",
    respuestas: [
      { texto: "Juan", correcta: false },
      { texto: "Pablo", correcta: false },
      { texto: "Felipe", correcta: true },
      { texto: "Bartolomé", correcta: false },
    ],
  },
  {
    pregunta: "¿En qué ciudad los discípulos fueron llamados 'cristianos' por primera vez? (Hechos 11:19-26)",
    respuestas: [
      { texto: "Jerusalén", correcta: false },
      { texto: "Antioquía", correcta: true },
      { texto: "Corinto", correcta: false },
      { texto: "Galacia", correcta: false },
    ],
  },

  {
    pregunta: "¿En qué ciudad recibieron los discípulos el Espíritu Santo? (Hechos 2:1-4)",
    respuestas: [
      { texto: "Belén", correcta: false },
      { texto: "Jerusalén", correcta: true },
      { texto: "Antioquía", correcta: false },
      { texto: "Corinto", correcta: false },
    ],
  },
  {
    pregunta: "¿Quién fue el apóstol que predicó a la multitud el día de Pentecostés? (Hechos 2:14-41)",
    respuestas: [
      { texto: "Pedro", correcta: true },
      { texto: "Pablo", correcta: false },
      { texto: "Juan", correcta: false },
      { texto: "Santiago", correcta: false },
    ],
  },
  {
    pregunta: "¿Cuántas personas se convirtieron al escuchar el mensaje de Pedro? (Hechos 2:41)",
    respuestas: [
      { texto: "30 personas", correcta: false },
      { texto: "300 personas", correcta: false },
      { texto: "3000 personas", correcta: true },
      { texto: "30.000 personas", correcta: false },
    ],
  },
 
  {
    pregunta: "¿Qué hizo Pedro al encontrarse con el inválido en la puerta del templo? (Hechos 3:1-10)",
    respuestas: [
      { texto: "Le predicó", correcta: false },
      { texto: "Lo resucitó", correcta: false },
      { texto: "Lo criticó", correcta: false },
      { texto: "Lo sanó", correcta: true },
      
    ],
  },
  {
    pregunta: "¿Quiénes pusieron presos a Pedro y a Juan por predicar en el templo? (Hechos 4:1-4)",
    respuestas: [
      { texto: "Los fariseos", correcta: false },
      { texto: "Los saduceos", correcta: true },
      { texto: "Los escribas", correcta: false },
      { texto: "Los judíos", correcta: false },
    ],
  },
  {
    pregunta: "¿En nombre de quién sanaban los apóstoles a los enfermos? (Hechos 4:7-10)",
    respuestas: [
      { texto: "De Dios", correcta: false },
      { texto: "De Jesucristo de Nazaret", correcta: true },
      { texto: "En su propio nombre", correcta: false },
      { texto: "De Pablo", correcta: false },
 ],
  },
  {
    pregunta: "¿Quién defendió a los apóstoles ante el sanedrín? (Hechos 5:29-32)",
    respuestas: [
      { texto: "Pedro", correcta: false },
      { texto: "Santiago", correcta: false },
      { texto: "Gamaliel", correcta: true },
      { texto: "Saulo", correcta: false },
    ],
  },
  {
    pregunta: "¿Quién fue el primer mártir cristiano? (Hechos 6:8-7:60)",
    respuestas: [
      { texto: "Pedro", correcta: false },
      { texto: "Saulo", correcta: false },
      { texto: "Esteban", correcta: true },
      { texto: "Santiago", correcta: false },
    ],
  },

  {
    pregunta: "¿En qué monte enseñó Jesús sobre el fin de los tiempos? (Marcos 13:1-37)",
    respuestas: [
      { texto: "Monte Carmelo", correcta: false },
      { texto: "Monte Hermón", correcta: false },
      { texto: "Monte Tabor", correcta: false },
      { texto: "Monte de los Olivos", correcta: true },
    ],
  },

  {
    pregunta: "¿Cuántos panes y peces utilizó Jesús para alimentar a una multitud de 5,000 personas? (Marcos 6:30-44)",
    respuestas: [
      { texto: "3 panes y 2 peces", correcta: false },
      { texto: "5 panes y 2 peces", correcta: true },
      { texto: "7 panes y 5 peces", correcta: false },
      { texto: "12 panes y 7 peces", correcta: false },
    ],
  },

  {
    pregunta: "¿Cómo respondió Jesús cuando el sumo sacerdote le preguntó si era el Cristo, el Hijo de Dios? (Marcos 14:53-65)",
    respuestas: [
      { texto: "Sí, lo soy", correcta: false },
      { texto: "No, no lo soy", correcta: false },
      { texto: "Tú lo has dicho", correcta: true },
      { texto: "Hizo silencio", correcta: false },
    ],
  },

{
    pregunta: "¿A qué discípulo llamó Jesús primero? (Marcos 1:16-20)",
    respuestas: [
      { texto: "Andrés", correcta: true },
      { texto: "Pedro", correcta: false },
      { texto: "Santiago", correcta: false },
      { texto: "Juan", correcta: false },
    ],
  },
  {
    pregunta: "¿A quién sanó Jesús en la sinagoga en Capernaúm? (Marcos 1:21-28)",
    respuestas: [
      { texto: "Al hijo del centurión", correcta: false },
      { texto: "Hombre con espíritu inmundo", correcta: true },
      { texto: "Suegra de Pedro", correcta: false },
      { texto: "Un leproso", correcta: false },
    ],
  },
  {
    pregunta: "¿Qué hizo Jesús después de sanar al leproso? (Marcos:40-45)",
    respuestas: [
      { texto: "Se retiró al desierto a orar", correcta: false },
      { texto: "Predicó en las sinagogas", correcta: false },
      { texto: "Sanó a un paralítico", correcta: true },
      { texto: "Salió a pescar con sus discípulos", correcta: false },
    ],
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
    pregunta: "¿Cuál es la primera creación de Dios? Génesis 1:1-5", respuestas: [
       { texto: "El cielo", correcta: false },
      { texto: "La tierra", correcta: false },
      { texto: "La luz", correcta: true },
      { texto: "Los animales acuáticos", correcta: false },
     ],
  },

  {  pregunta: "¿Qué discípulo negó a Jesús tres veces antes de que cantara el gallo? (Marcos 14:66-72)",
  respuestas: [
    { texto: "Pedro", correcta: true },
    { texto: "Santiago", correcta: false },
    { texto: "Juan", correcta: false },
    { texto: "Andrés", correcta: false },
  ],
},

  {  pregunta: "¿En qué lugar se encontraban Rut y su suegra al inicio del libro? Rut 1:1",  respuestas:[ {texto: "Israel", correcta: false}, {texto: "Egipto", correcta: false}, {texto: "Jericó", correcta: false}, {texto: "Moab", correcta: true},],},
 

  { pregunta: "¿Quiénes fueron los primeros en visitar a Jesús? Lucas 2:8-20", respuestas:[{texto:"Pastores",correcta:true},{texto:"Reyes Magos",correcta:false},{texto:"Sacerdotes",correcta:false},{texto:"Discípulos de Juan el Bautista",correcta:false},],},

  { pregunta:"¿Cuál fue la primera tentación de Jesús en el desierto? Lucas 4:1-13", respuestas:[{texto:"Saltar del templo",correcta:false},{texto:"Adorar a Satanás",correcta:false}, {texto:"Convertir piedras en pan",correcta:true},{texto:"Negar a Dios",correcta:false},],},

  {pregunta: "¿Qué se afirma en el Salmo 118:24 que el Señor ha hecho?", respuestas:[ {texto: "Creó el mundo", correcta: false}, {texto: "Sanó a los enfermos", correcta: false}, {texto: "Se ha levantado", correcta: true}, {texto: "Creó al hombre", correcta: false}, ],},
  

   { pregunta: "¿Qué es vanidad? Eclesiastés 1:2", respuestas: [ { texto: "La riqueza", correcta: false }, { texto: "La fama", correcta: false }, { texto: "Todo", correcta: true }, { texto: "La sabiduría", correcta: false }, ], },

   { pregunta: "¿Qué hay para el hombre en todo su trabajo? Eclesiastés 3:9-13", respuestas: [ { texto: "Dolor", correcta: false }, { texto: "Gozo", correcta: true }, { texto: "Vergüenza", correcta: false }, { texto: "Frustración", correcta: false }, ], },
  
   { pregunta: "¿Qué es mejor que la luz? Eclesiastés 7:5", respuestas:[ {texto:"La riqueza",correcta:false}, {texto:"El poder",correcta:false}, {texto:"La fama",correcta:false}, {texto:"La sabiduría",correcta:true}, ],},
  
   { pregunta: "¿Qué es mejor que la vida? Eclesiastés 7:1-2", respuestas:[{texto:"La muerte",correcta:true},{texto:"La riqueza",correcta:false},{texto:"El éxito",correcta:false},{texto:"La fama",correcta:false}, ],},
  
   { pregunta: "¿Qué es mejor que la risa? Eclesiastés 7:3-4", respuestas:[ {texto:"La indiferencia",correcta:false}, {texto:"El llanto",correcta:true}, {texto:"La arrogancia",correcta:false},{texto:"La tristeza",correcta:false}, ],},

  { pregunta: "¿Qué es una fuente de vida? Proverbios 4:23", respuestas: [ { texto: "El cerebro", correcta: false }, { texto: "Los pulmones", correcta: false }, { texto: "El corazón", correcta: true }, { texto: "Los riñones", correcta: false }, ], },

  { pregunta: "¿Qué es el comienzo de la sabiduría? Proverbios 1:7", respuestas: [ { texto: "El temor del Señor", correcta: true }, { texto: "La educación formal", correcta: false }, { texto: "La experiencia personal", correcta: false }, { texto: "La inteligencia innata", correcta: false }, ], },
  
  { pregunta: "¿Qué es mejor que un hombre fuerte? Proverbios 16.32", respuestas:[{texto:"El que tiene mucho dinero.",correcta:false}, {texto:"El que domina su espíritu",correcta:true},{texto:"El que tiene muchos amigos",correcta:false},{texto:"El que tiene mucho poder",correcta:false},],},
  
  { pregunta: "¿Qué es el fruto de la humildad? Proverbios 22:4", respuestas: [ { texto: "Riqueza, honor y vida", correcta: true }, { texto: "Pobreza, vergüenza y muerte", correcta: false }, { texto: "Fama, poder y éxito", correcta: false }, { texto: "Arrogancia, envidia y maldad", correcta: false }, ], },

  { pregunta: "¿Cómo murió Judas Iscariote? Mateo 27:3-10", respuestas: [ { texto: "Fue apedreado", correcta: false }, { texto: "Murió de viejo", correcta: false }, { texto: "Se quemó vivo", correcta: false },  { texto: "Se ahorcó", correcta: true }, ], },
  
  { pregunta: "¿Qué es mejor que la ira? Proverbios 16:32", respuestas: [ { texto: "La bondad", correcta: false }, { texto: "El amor", correcta: false }, { texto: "La arrogancia", correcta: false }, { texto: "La paciencia", correcta: true } ], },
  { 

    pregunta: "¿Solo quién sabe la hora y día en la que Jesús vendrá?" , respuestas:  

[ { texto: "Los científicos", correcta: false },  

{ texto: "Los arqueólogos", correcta: false }, 

 { texto: "Los discípulos", correcta: false }, 

 { texto: "Dios", correcta: true}, ], 

  },

  { pregunta: "¿Qué dice el autor que es la sabiduría? Eclesiastés 1:18", respuestas: [ { texto: "La clave para la felicidad", correcta: false }, { texto: "Un don de Dios", correcta: false }, { texto: "Una carga pesada", correcta: true }, { texto: "La fuente de la vida eterna", correcta: false }, ], },

  { pregunta: "¿Qué es lo que siempre ha existido y siempre existirá? Eclesiastés 1:4", respuestas: [ { texto: "La tierra", correcta: false }, { texto: "El sol", correcta: false }, { texto: "El mar", correcta: false }, { texto: "Regeneración de las cosas", correcta: true }, ], },

  { pregunta: "¿Quién era el rey de Persia en el tiempo de Ester? Ester 1:1", respuestas: [ { texto: "Artajerjes", correcta: false }, { texto: "Ciro", correcta: false }, { texto: "Darío", correcta: false },{ texto: "Asuero", correcta: true } ], },

  {
    pregunta: "¿Qué animal es mencionado como el animal que salió del arca de Noé cuando las aguas comenzaron a ceder?" , respuestas: [ { texto: "Mariposa", correcta: false }, { texto: "Cuervo", correcta: true }, { texto: "Gaviota", correcta: false }, { texto: "Paloma", correcta: false } ]
  }, 

  {
    pregunta: '¿Qué seres vivos aparecen en el libro de Isaías gritan "Santo, santo, santo es el Señor Dios Todopoderoso"?' , respuestas: [ { texto: "Querubines", correcta: false }, { texto: "Ángeles", correcta: false }, { texto: "Arcángeles", correcta: false }, { texto: "Serafines", correcta: true } ]
  },
  { pregunta: "¿Qué insecto es elogiado por su organización y provisión en Proverbios?" , respuestas: [ { texto: "Termita", correcta: false }, { texto: "Avispa", correcta: false }, { texto: "Hormiga", correcta: true }, { texto: "Mosca", correcta: false } ] },
 
  { pregunta: "¿Qué animal es conocido por su fuerza y ​​valor según Proverbios?" , respuestas: [ { texto: "Águila", correcta: true }, { texto: "Halcón", correcta: false }, { texto: "Pavo real", correcta: false }, { texto: "Condor", correcta: false } ] },

  {
    pregunta: "¿Qué animal aparece en el libro de Éxodo como un castigo de Dios a Egipto y que finalmente llevó a su liberación?" , respuestas: [ { texto: "Mosquito", correcta: false }, { texto: "Sapo", correcta: true }, { texto: "Cocodrilo", correcta: false }, { texto: "Hormiga", correcta: false }  ]
  },
 

{ pregunta: "¿Qué animal es mencionado como el más astuto de los animales?" , respuestas: [ { texto: "Búho", correcta: false }, { texto: "Águila", correcta: false }, { texto: "Conejo", correcta: false }, { texto: "Serpiente", correcta: true } ] },
 
{ pregunta: "¿En qué ciudad se encontraba la casa de Cornelio, a quien Pedro visitó, según Hechos 10?" , respuestas: [ { texto: "Jope", correcta: true }, { texto: "Capernaum", correcta: false }, { texto: "Corinto", correcta: false }, { texto: "Jerusalem", correcta: false } ] },
{ pregunta: "¿En qué ciudad se encontraba el Areópago donde Pablo predicó su famoso discurso registrado en Hechos 17?" , respuestas: [ { texto: "Atenas", correcta: true }, { texto: "Roma", correcta: false }, { texto: "Jerusalén", correcta: false }, { texto: "Corinto", correcta: false } ] },


{ pregunta: "¿En qué ciudad se encontraba la iglesia a la que Pablo escribió la carta a Filemón?" , respuestas: [ { texto: "Colosas", correcta: false }, { texto: "Éfeso", correcta: false }, { texto: "Filipos", correcta: false }, { texto: "Roma", correcta: true } ] }, 


{ pregunta: "¿En qué ciudad se encontraba la iglesia a la que Pablo escribió las cartas a Timoteo?" , respuestas: [ { texto: "Antioquía", correcta: false }, { texto: "Roma", correcta: false }, { texto: "Atenas", correcta: false }, { texto: "Éfeso", correcta: true } ] },



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
