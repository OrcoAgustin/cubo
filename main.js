let respuestas = [
  "Reinicia el equipo",
  "Demora en impactar el cambio, espera 5 minutos",
  "Envia a soporte una captura del error",
  "Es un problema general",
  "Lo estamos viendo...",
  "Es un problema en el server",
];
function conseguirRespuestas() {
  let i = -1;
  while (i < 0 || i > 5) {
    i = Math.trunc(Math.random() * 10);
  }
  console.log(i, respuestas[i]);
  return i;
}

$("#boton").click(function () {
  $("#respuesta").html(conseguirRespuestas());
  $("#imagen").attr("src", `img/i${conseguirRespuestas()}.jpg`);
});
