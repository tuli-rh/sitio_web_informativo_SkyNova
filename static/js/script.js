// Constantes DOM
const imageBullying1 = document.getElementById("bullying1")
const imageBullying2 = document.getElementById("bullying2")
const silentBullying = document.getElementById("silent")

// Acercar o alejar las imágenes al pasar o quitar el mouse de encima
// Imagen 1
imageBullying1.addEventListener("mouseover", function() {
    imageBullying1.style.transform = "scale(1.2)";
});

imageBullying1.addEventListener("mouseout", function() {
    imageBullying1.style.transform = "scale(1)";
});
// Imagen 2
imageBullying2.addEventListener("mouseover", function() {
    imageBullying2.style.transform = "scale(1.1)";
});

imageBullying2.addEventListener("mouseout", function() {
    imageBullying2.style.transform = "scale(1)";
});
// Imagen 3
silentBullying.addEventListener("mouseover", function() {
    silentBullying.style.transform = "scale(1.1)";
});

silentBullying.addEventListener("mouseout", function() {
    silentBullying.style.transform = "scale(1)";
});

// Funciones para cambiar la página
// ir a Acerca De
function irAcercaDe() {
    window.location.href = ("/pages/acercade.html");
}

// Ir a ¿Quiénes Somos?
function irQuienesSomos() {
    window.location.href = ("/pages/quienessomos.html");
}

// Ir a Contacto
function irContacto() {
    window.location.href = ("/pages/contacto.html");
}