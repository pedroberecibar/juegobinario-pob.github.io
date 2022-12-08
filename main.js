function crear_numSec(max, min){
    var numero_sec = Math.random() * (max-min) + min;
    var numero_sec = parseInt(numero_sec);
    return numero_sec;
}

var min = 1; 
var max = 100;

var numero_sec = crear_numSec(max, min);
console.log(numero_sec);

let contador = 0;
const intentos = document.getElementById("intentos")
const pista = document.getElementById("pista");

const btn_aceptar = document.querySelector('#boton_aceptar');
btn_aceptar.addEventListener('click', ()=> {

    contador ++;
    intentos.textContent = contador;

    let numero_ing = parseInt(document.getElementById("input").value);
    console.log(numero_ing);

    if(numero_ing === numero_sec){
        alert('Felicidades!! Adivinaste el numero secreto!!!!');
        contador = 0;
        intentos.textContent = contador;
        pista.textContent = '-';
        numero_sec = crear_numSec(max,min);
        console.log(numero_sec);
        document.getElementById("input").value = "";
        

    } else if((numero_ing < numero_sec || numero_ing > numero_sec) && contador == 10){
        alert('Perdiste!!!')
        contador = 0;
        intentos.textContent = contador;
        pista.textContent = '-';
        numero_sec = crear_numSec(max,min);
        console.log(numero_sec)
        document.getElementById("input").value = "";

    } else if(numero_ing < numero_sec){
        pista.textContent = 'Erraste! El numero que ingresaste es mas Bajo que el numero secreto.';

    } else if(numero_ing > numero_sec){
        pista.textContent = 'Erraste! El numero que ingresaste es mas Alto que el numero secreto.';
    }
})

const btn_salir = document.querySelector('#boton_salir');
btn_salir.addEventListener('click', ()=> {
    alert('Gracias por jugar! vuelva prontoss :)');
})
