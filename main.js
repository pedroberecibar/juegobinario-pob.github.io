function crear_numSec(max, min){
    var numero_sec = Math.random() * (max-min) + min;
    var numero_sec = parseInt(numero_sec);
    return numero_sec;
}

var min = 1; 
var max = 100;

var numero_sec = crear_numSec(max, min);
var playing = false;

let contador = 0;
const intentos = document.getElementById("intentos");
const pista = document.getElementById("pista");

const btn_jugar = document.getElementById('boton_open');
const start_window = document.getElementById('start_window');
const game_window = document.getElementById('modal-container');

btn_jugar.addEventListener('click', ()=> {
    playing = true;
    start_window.style.display = 'none';
    game_window.style.display = 'block';
})

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
        pista.textContent = 'Fallaste! El numero '+ numero_ing.toString() +' es mas Bajo que el numero secreto.';

    } else if(numero_ing > numero_sec){
        pista.textContent = 'Fallaste! El numero '+ numero_ing.toString() +' es mas Alto que el numero secreto.';
    }
})

const btn_salir = document.querySelector('#boton_salir');
btn_salir.addEventListener('click', ()=> {
    playing = false
    intentos.textContent = '0';
    pista.textContent = '-';
    document.getElementById("input").value = "";
    alert('¡Gracias por jugar! :)');
    game_window.style.display = 'none';
    start_window.style.display = 'block';
})
