let resultado = document.getElementById('resultado');

//funciones arrow
let calcular = () => {
    resultado.value = eval(resultado.value);
}

let asignar = (valor) => {
    resultado.value = resultado.value + valor;
}

let borrar = () => {
    resultado.value = '';

}

// funciones normales
function asignarX(valor){
    //value es una propiedad que nos permite acceder al valor de un input o textarea y modificarlo si es necesario
    // resultado.value += valor;
    resultado.value = resultado.value + valor;
}



function calcularX(){
    // eval(): evalua una expresión matemática y devuelve el resultado de la misma
    resultado.value = eval(resultado.value);
}

function borrarX(){
    resultado.value = '';
}

//funcion para SENO
function seno(){
    let valor = Math.sin(eval(resultado.value));
    resultado.value = valor;
}

//funcion para COSENO
function coseno(){
    let valor = Math.cos(eval(resultado.value));
    resultado.value = valor;
}

//funcion para TANGENTE
function tangente(){
    let valor = Math.tan(eval(resultado.value));
    resultado.value = valor;
}

//funcion de logaritmo natural
function logaritmo(){
    let valor = Math.log(eval(resultado.value));
    resultado.value = valor;
}