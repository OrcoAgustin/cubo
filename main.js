let respuestas = [
  "Reinicia el equipo",
  "Demora en impactar el cambio, espera 5 minutos",
  "Envia a soporte una captura del error",
  "Es un problema general",
  "Lo estamos viendo...",
  "Es un problema en el server",
  "Mas despacio que soy dislexico",
];
function conseguirRespuestas() {
  let i = -1;
  while (i < 0 || i > 6) {
    i = Math.trunc(Math.random() * 10);
  }
  console.log(i, respuestas[i]);
  let a = i;
  return i;
}

$("#boton").click(function () {
  let v = conseguirRespuestas();
  $("#respuesta").html(respuestas[v]);
});

$("#lightDark").click(function () {
  if ($("#nav").attr("class") == "navbar navLigth") {
    $("#nav").attr("class", "navbar navDark");
    $("#cuerpo").attr("class", "darkMode");
    $("#lightDark").html("Modo Claro");
  } else {
    $("#nav").attr("class", "navbar navLigth");
    $("#cuerpo").attr("class", "lightMode");
    $("#lightDark").html("Modo Oscuro");
  }
});
