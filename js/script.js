// Il computer deve generare 16 numeri casuali tra 1 e 100
// i numeri non possono essere duplicati
// in seguuito deve chiedere all'utente (100-16) volte di inserire un numero alla volta sempre compreso tra 1 e  100
// l'utente non piò insserire lo stesso numero
// se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando l'utente inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito



// creo funzione che  mi genera numero random da 1 a 100
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Bonus : seleziono il livello di difficoltà
//chiedo all'utente di scegliere il livello di difficoltà tra 0 1 e 2
var difficolta = parseInt(prompt("Inserisci il livello di difficoltà con 0, 1 o 2"));
var range;

while(difficolta < 0 || difficolta > 2 || isNaN(difficolta)){
  difficolta = parseInt(prompt("Hai sbagliato l'inserimento del livello di difficoltà: scegli solo tra 0, 1 oppure 2 !!"));
}

if(difficolta == 0){
  range = 100;
} else if(difficolta == 1){
  range = 80;
} else if (difficolta == 2){
  range = 50;
}

var arrayCasuali = [];
// ciclo la funzione fino a creare 16 numeri casuali
var contatore = 1;
while(contatore <= 16){
  var numeriCasuali = random(1, range);
  // console.log(numeriCasuali);
  //controllo sui duplicati
  if(!arrayCasuali.includes(numeriCasuali)){
    arrayCasuali.push(numeriCasuali);
    contatore++;
  }
}
console.log(arrayCasuali);

var tentativi = range;
var bombe = 16;
var arrayUtente = [];
var bombaEsplosa = false;
var contatore1 = 0;

while(contatore1 < (range - bombe) && bombaEsplosa == false){
  var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e " + range + " tentativo n: " + (contatore1 + 1)));

  if(numeroUtente > range || numeroUtente < 1){
    alert("Hai inserito un numero fuori range!!!");
  } else if(arrayCasuali.includes(numeroUtente)){
    bombaEsplosa = true;
    alert("Game Over");
  } else if(!arrayUtente.includes(numeroUtente)){
    arrayUtente.push(numeroUtente);
    contatore1++;
  } else{
    alert("Occhio, hai già inserito questo numero");
  }
}

console.log(arrayUtente);

if(contatore1 == (range - bombe)){
  alert("Hai vinto!!");
}
alert("Il tuo punteggio è: " + contatore1);
