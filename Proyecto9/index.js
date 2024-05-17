for (let x=0; x<5; x++){
    if(x==2)
    continue;
    console.log(x);
}

let a=10;
a = a+5;
a+=5;

let x=10;
x**=5;
console.log(x);

//Tipo fecha 
const fecha = new Date();
console.log(fecha);

function myFunction(p1=3, p2=4){
    return p1*p2
} 

console.log(myFunction(5,6));
console.log(myFunction());
console.log(myFunction(8));
console.log(myFunction);


function otraFuncion(a,b){
    return a*b;
}

//funcion arrow let nomfuncion = (parametros) => {}
let otraFuncion2 = (a,b) => a*b;
console.log(otraFuncion2(4,80));

//Función autoejecutable
//Función anónima
(function(){
    console.log('Esta es una función anónima autoejecutable');
})();

//Función arrow, anónima, autoejecutable
(() =>  console.log('Esta es una función anónima autoejecutable 2'))();

//Variable objeto con nombre, apellido 
let alumno = {
    nombre: 'Ruth',
    apellido: 'Manríquez',
    matricula: 12345,
    /*nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }*/
    nombreCompleto : function(){
     return this.nombre + ' ' + this.apellido
    }
};
console.log(alumno.nombreCompleto());

