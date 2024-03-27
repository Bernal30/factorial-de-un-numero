
function asignarTextoHTML(etiqueta, texto) {
    let etiquetaHTML = document.getElementById(etiqueta);
    return etiquetaHTML.innerHTML = texto;
}

function condicionInicial() {
    asignarTextoHTML('texto-parrafo', `Digite un número entero entre 0 y 100 para calcular su factorial:`);
    vaciarInput();
    return;
}

condicionInicial();

/*
function multiplicacion() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);    
    let resultado = (numeroUsuario)*2;
    return console.log(resultado);     
}
*/

//se muestra en pantalla el resultado del factorial del número del usuario en caso de que sea un entero positivo entre 1 y 100
function factorialNumeroUsuario() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    vaciarInput();
    activarBotonReinicio();
    apagarBotonCalcular();
    if(numeroUsuario > 100){
        let respuesta = asignarTextoHTML('texto-parrafo', `El número ingresado es mayor a 100.`);
        return respuesta;
    } else{
        if(numeroUsuario >= 0){
            let respuesta = asignarTextoHTML('texto-parrafo', `El resultado de ${numeroUsuario}! (${numeroUsuario} factorial) es ${calculoFactorial(numeroUsuario)}.`);
            return respuesta;
        } else{
            let respuesta = asignarTextoHTML('texto-parrafo', `El número ingresado no es cero o un entero positivo.`);
            return respuesta;
        }
    }
}

//calculo del factorial de un número entero positivo o el cero
function calculoFactorial(number) {
    if (number === 0) {
        return number + 1;
    } else {
        let resultadoFactorial = number * (calculoFactorial(number - 1));
        return resultadoFactorial;
    }
}

function vaciarInput() {
    return document.getElementById('valorUsuario').value = '';
}

function activarBotonReinicio() {
    return document.getElementById('reinicio').removeAttribute('disabled');
}

//se llama a esta función mediante el boton intentar de nuevo
function IntentarDeNuevo() {
    //deshabilitar el boton intentar de nuevo
    document.getElementById('reinicio').setAttribute('disabled', 'true');
    //volver a la condicion inicial
    condicionInicial();
    //activar el boton calcular
    document.getElementById('calculo_factorial').removeAttribute('disabled');
    return;
}

function apagarBotonCalcular() {
    document.getElementById('calculo_factorial').setAttribute('disabled', 'true');
    return;
}
