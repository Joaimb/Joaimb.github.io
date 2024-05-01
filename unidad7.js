//variables
var nombre = prompt("¿Cuál es tu nombre?");
var comsumo = prompt("¿Para llevar o consumir aquí?");
var cafe = prompt(
  "¿Qué tipo de café te gustaría? (Espresso, Americano, Cappuccino, Latte.)"
).toLowerCase();
var tamaño = prompt("¿Tamaño? (Chico, Mediano, Grande)").toLowerCase();
var conLeche = prompt("¿Con leche? (Si, No)");
var azucar = prompt("¿Azucar? (Si, No)");

// Valores
var precioTotal = 0;
var precios = {
  espresso: 25,
  americano: 30,
  cappuccino: 35,
  latte: 40,
  chico: 10,
  mediano: 15,
  grande: 20,
  leche: 5,
  azúcar: 5,
};

precioTotal += precios[cafe] || 0;
precioTotal += precios[tamaño] || 0;

//con leche y azucar
if (conLeche.toLowerCase() === "si") {
  precioTotal += precios["leche"];
}

if (azucar.toLowerCase() === "si") {
  precioTotal += precios["azúcar"];
}
//total
var resultado = precioTotal * 2 + 5;

// mas infromacion
function mostrarInformacionDetallada(boton) {
  const tarjetaProducto = boton.closest(".caja-cont3");
  const contenedorInformacionDetallada = tarjetaProducto.querySelector(
    ".informacion-detallada"
  );

  contenedorInformacionDetallada.style.display =
    contenedorInformacionDetallada.style.display === "none" ? "block" : "none";
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
  imagenCafe.style.objectFit = "fit";

  switch (cafe) {
    case "espresso":
      imagenCafe.src = "/imagenes/espresso.jpg";
      break;
    case "americano":
      imagenCafe.src = "/imagenes/americano.jpg";
      break;
    case "cappuccino":
      imagenCafe.src = "/imagenes/cappuccino.jpg";
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
//  Fin de imagenes cafe