//variables y funciones globales
let againCalculationButton = document.getElementById("reinicio");
let calculationFactorialButton = document.getElementById("calculo_factorial");
const factorialInputObject = document.getElementById("valorUsuario");

//se capturan eventos de teclado y mouse para funcionalidades de los botones
calculationFactorialButton.addEventListener("click", factorialNumeroUsuario);
againCalculationButton.addEventListener("click", intentarDeNuevo);
factorialInputObject.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculationFactorialButton.click();
  }
});

function asignarTextoHTML(etiqueta, texto) {
  let etiquetaHTML = document.getElementById(etiqueta);
  return (etiquetaHTML.innerHTML = texto);
}

function condicionInicial() {
  asignarTextoHTML(
    "texto-parrafo",
    "Digite un número entero entre 0 y 100 para calcular su factorial:"
  );
  vaciarInput();
  return;
}

function vaciarInput() {
  return (document.getElementById("valorUsuario").value = "");
}

//calculo del factorial de un número entero positivo o el cero
function calculoFactorial(number) {
  if (number === 0) {
    return number + 1;
  } else {
    let resultadoFactorial = number * calculoFactorial(number - 1);
    return resultadoFactorial;
  }
}

//se habilita el boton "Intentar de nuevo" y se deshabilita el boton "Calcular"
function buttonLogic() {
  document.getElementById("reinicio").removeAttribute("disabled");
  document.getElementById("calculo_factorial").setAttribute("disabled", "true");
  return;
}

//se llama a esta función mediante el boton intentar de nuevo
function intentarDeNuevo() {
  //deshabilitar el boton intentar de nuevo
  document.getElementById("reinicio").setAttribute("disabled", "true");
  //activar el boton calcular
  document.getElementById("calculo_factorial").removeAttribute("disabled");
  condicionInicial();
  return;
}

condicionInicial();

//se muestra en pantalla el resultado del factorial, antes se evalua si el número es valido
function factorialNumeroUsuario() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  vaciarInput();
  buttonLogic();
  if (numeroUsuario > 100) {
    return asignarTextoHTML(
      "texto-parrafo",
      `El número ingresado es mayor a 100.`
    );
  } else {
    if (numeroUsuario >= 0) {
      return asignarTextoHTML(
        "texto-parrafo",
        `El resultado de ${numeroUsuario}! (${numeroUsuario} factorial) es ${calculoFactorial(
          numeroUsuario
        )}.`
      );
    } else {
      return asignarTextoHTML(
        "texto-parrafo",
        `El número ingresado no es cero o un entero positivo.`
      );
    }
  }
}
