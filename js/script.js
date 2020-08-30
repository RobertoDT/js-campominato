// Il computer deve generare 16 numeri casuali tra 1 e 100
// i numeri non possono essere duplicati
// in seguuito deve chiedere all'utente (100-16) volte di inserire un numero alla volta sempre compreso tra 1 e  100
// l'utente non piò insserire lo stesso numero
// se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando l'utente inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito



// creo funzione che  mi genera numero random da 1 a 100
function random() {
  return Math.floor(Math.random() * 100) + 1;
}

var arrayCasuali = [];
// ciclo la funzione fino a creare 16 numeri casuali
var contatore = 1;
while(contatore <= 16){
  var numeriCasuali = random();
  // console.log(numeriCasuali);
  //controllo sui duplicati
  if(!arrayCasuali.includes(numeriCasuali)){
    arrayCasuali.push(numeriCasuali);
    contatore++;
  }
}
console.log(arrayCasuali);

var tentativi = 100;
var bombe = 16;

var arrayUtente = [];

var contatore1 = 0;
while(contatore1 < (tentativi - bombe)){
  var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100, tentativo n: " + (contatore1 + 1)));

  if(arrayCasuali.includes(numeroUtente)){
    alert("Game Over");
    break;
  } else if(!arrayUtente.includes(numeroUtente)){
    arrayUtente.push(numeroUtente);
    contatore1++;
  } else{
    alert("Occhio, hai già inserito questo numero");
  }
}
console.log(arrayUtente);
if(contatore1 == tentativi){
  alert("Hai vinto!!");
}
alert("Il tuo risultato è: " + contatore1);
