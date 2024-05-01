
//variables
var nombre= prompt('¿Cuál es tu nombre?');
var comsumo= prompt('¿Para llevar o consumir aquí?');
var cafe= prompt('¿Qué tipo de café te gustaría? (Espresso, Americano, Cappuccino, Latte.)');
var tamaño= prompt('¿Tamaño? (Chico, Mediano, Grande)');
var conLeche= prompt('¿Con leche? (Si, No)');
var azucar= prompt('¿Azucar? (Si, No)');

// Valores
var precioTotal = 0;
var precios = {
     'Espresso': 25,
     'Americano': 30,
     'Cappuccino': 35,
     'Latte': 40,
     'Chico': 10,
     'Mediano': 15,
     'Grande': 20,
     'Leche': 5,
     'Azúcar': 5
 };

 precioTotal += precios[cafe] || 0; 
 precioTotal += precios[tamaño] || 0; 

 //con leche y azucar
 if (conLeche.toLowerCase() === 'si') {
     precioTotal += precios['Leche'];
 }

 if (azucar.toLowerCase() === 'si') {
     precioTotal += precios['Azúcar'];
 }
 //total
 var resultado = precioTotal * 2 + 5;

// mas infromacion
function mostrarInformacionDetallada(boton) {
  const tarjetaProducto = boton.closest(".caja-cont3");
  const contenedorInformacionDetallada = tarjetaProducto.querySelector(".informacion-detallada");

  contenedorInformacionDetallada.style.display = contenedorInformacionDetallada.style.display === 'none' ? 'block' : 'none';
}
// Fin de mas informacion
function mostrarInformacionDetallada(button) {
  var info = button.nextElementSibling;
  if (info.style.display === "none") {
      info.style.display = "block";
  } else {
      info.style.display = "none";
  }
}

//imagenes cafe
const cafeElegido = cafe;

function mostrarImagenCafe(cafe) {
  const imagenCafe = document.getElementById("imagen-cafe");

  switch (cafe) {
    case "americano":
      imagenCafe.src = "/imagenes/americano.jpg";
      break;
    case "capuccino":
      imagenCafe.src = "/imagenes/capuccino.jpg";
      break;
    case "espresso":
      imagenCafe.src = "/imagenes/espresso.jpg";
      break;
    case "latte":
      imagenCafe.src = "/imagenes/latte.jpg";
      break;
  }
}

window.onload = function () {
  const cafeElegido = cafe;
  mostrarImagenCafe(cafeElegido);
};
window.onload = function() { const cafeElegido = cafe; mostrarImagenCafe(cafeElegido) }
//  Fin de imagenes cafe
imagenCafe.style.objectFit = "fit";