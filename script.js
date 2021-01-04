var canal = document.getElementById('canal');
var botonCalcularVisitas = document.getElementById('calcularVisitas');
var visitasMinimas = document.getElementById('visitasMinimas');
var visitasPromedio = document.getElementById('visitasPromedio');
var visitasMaximas = document.getElementById('visitasMaximas');

botonCalcularVisitas.addEventListener('click', calculadora);

function calculadora(){
    var subs = canal.value; 
    var DosPorciento = parseInt(subs) * 0.02;
    var SeisPorciento = parseInt(subs) * 0.06;
    var DiezPorciento = parseInt(subs) * 0.1;
    visitasMinimas.innerHTML = Math.ceil(DosPorciento);
    visitasPromedio.innerHTML = Math.ceil(SeisPorciento);
    visitasMaximas.innerHTML = Math.ceil(DiezPorciento);
}


