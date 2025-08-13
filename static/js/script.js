// Constantes DOM
const imageBullying1 = document.getElementById("bullying1");
const imageBullying2 = document.getElementById("bullying2");
const silentBullying = document.getElementById("silent");
const boton1 = document.querySelector(".btn1");
const boton2 = document.querySelector(".btn2");
const boton3 = document.querySelector(".btn3");

// Acercar o alejar las imágenes o botones al pasar o quitar el mouse de encima
// Imagen 1
imageBullying1.addEventListener("mouseover", function () {
  imageBullying1.style.transform = "scale(1.2)";
});

imageBullying1.addEventListener("mouseout", function () {
  imageBullying1.style.transform = "scale(1)";
});
// Imagen 2
imageBullying2.addEventListener("mouseover", function () {
  imageBullying2.style.transform = "scale(1.1)";
});

imageBullying2.addEventListener("mouseout", function () {
  imageBullying2.style.transform = "scale(1)";
});
// Imagen 3
silentBullying.addEventListener("mouseover", function () {
  silentBullying.style.transform = "scale(1.1)";
});

silentBullying.addEventListener("mouseout", function () {
  silentBullying.style.transform = "scale(1)";
});

// Botón 1
boton1.addEventListener("mouseover", function () {
  boton1.style.transform = "scale(1.2)";
});

boton1.addEventListener("mouseout", function () {
  boton1.style.transform = "scale(1)";
});
// Botón 2
boton2.addEventListener("mouseover", function () {
  boton2.style.transform = "scale(1.1)";
});

boton2.addEventListener("mouseout", function () {
  boton2.style.transform = "scale(1)";
});
// Botón 3
boton3.addEventListener("mouseover", function () {
  boton3.style.transform = "scale(1.1)";
});

boton3.addEventListener("mouseout", function () {
  boton3.style.transform = "scale(1)";
});

// Funciones para cambiar la página
// ir a acerca del bullying
function irAcercaDe() {
  window.location.href = ("https://cuidateplus.marca.com/enfermedades/psicologicas/bullying.html");
}

// Ir a ¿Quiénes Somos?
function irConsejos() {
  window.location.href = ("https://kidshealth.org/es/teens/bullies.html");
}

// Ir a ley del bullying
function irLeyBullying() {
  window.location.href = ("https://www.bcn.cl/leychile/navegar?idNorma=1030087");
}