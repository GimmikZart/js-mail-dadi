// 2 Gioco dei dadi, chi fa di più vince.


var dadoUno = Math.floor(Math.random() * 6) + 1;

var dadoDue = Math.floor(Math.random() * 6) + 1;

document.getElementById("primolancio").innerHTML = dadoUno;

document.getElementById("secondolancio").innerHTML = dadoDue;


if (dadoUno > dadoDue) {
  var risultato = " Utente ALPHA vince! "
} else if (dadoUno < dadoDue) {
  var risultato = " Utente BETA vince! "
} else {
  var risultato = " E' un pareggio! "
}

if (dadoUno > dadoDue) {
  var processo = "Utente ALPHA ha ottenuto un punteggio di " + dadoUno + " superando il valore " + dadoDue + " dell'utente BETA"
} else if (dadoUno < dadoDue) {
  var processo = "Utente BETA ha ottenuto un punteggio di " + dadoDue + " superando il valore " + dadoUno + " dell'utente ALPHA"
} else {
  var processo = "Utente ALPHA ha ottenuto un punteggio di " + dadoUno + " pareggiando il valore " + dadoDue + " dell'utente BETA"
}

document.getElementById("risultato").innerHTML = risultato;

document.getElementById("processo").innerHTML = processo;
