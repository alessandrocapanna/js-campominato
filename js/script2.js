// funzione che permette di trovare elemento in array
function ricercaArray(array, valoreCercato) {
  var trovato = false;
  for (var i = 0; i < array.length; i++) {
    var elemento = array[i];
    if (elemento == valoreCercato) {
      trovato = true;
    }
  }
  if (trovato == true) {
    return true;
  }else {
    return false;
  }
}
// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeriBomba = [];
i = 1;
while (i <= 16 ) {
  var numeroRandom = Math.floor(Math.random()*100 + 1)
  if (ricercaArray(numeriBomba,numeroRandom) === false) {
    numeriBomba.push(numeroRandom);
    i++;
  }
}
console.log(numeriBomba);

// faccio scegliere la modalità al giocatore
var mod = prompt('digita facile,medio o  difficile per scegliere la modalita altrimenti è facile ');
if (mod == 'facile') {
  var c = 100;
}else if (mod == 'medio') {
  var c = 80;
}else if (mod == 'difficile') {
  var c = 50;
}else {
  var c = 100;
}
//ciclo per chiedere numero e verifico se esiste nei numeriBomba se no lo aggiungo in array [a]
var b=0;
var a = [];
while (b < (c - 16)) {
  var num = parseInt(prompt('numero da 1 a 100'));
  if (!numeriBomba.includes(num)) {
    a.push('l');
    b++;
  }else {
    b = 100;
  }
}

// stampo risultato grazie alla lunghezza dell'array [a]
if (a.join('').length !== (c - 16)) {
  console.log('bravo ma hai preso una bomba il tuo punteggio è : ' + a.join('').length);
} else if (a.join('').length === (c - 16)) {
  console.log('hai vinto tt cos' + a.join('').length);
}
