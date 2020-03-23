// Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere e
// stampa un messaggio appropriato;


// creo l'array contenente la lista di email verificate

var mailCheck = ["spiderman@gmail.it" , "superman@gmail.it" , "batman@gmail.it" , "xman@gmail.it"];

// verifico in console che mi stampi i giusti array

console.log(mailCheck[1]);

// chiedo all'utente la sua mail

var userMail = prompt("Scrivi qui la tua mail");

// controllo che sia nella lista delle mail checkate tramite un ciclo

for (var i = 0; i < mailCheck.length; i++) {
  if (userMail != mailCheck[i]){
    var result = "autenticazione fallita";
  } else if (userMail === mailCheck[i]) {
    var result = "login effettuato";
  }
}

console.log(result);
