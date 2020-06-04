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
  } else {
    return false;
  }
}

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeriBomba = [];
i = 0;
while (i < 16 ) {
  var numeroRandom = Math.floor(Math.random()*100 + 1)
  if (ricercaArray(numeriBomba,numeroRandom) === false) {
    numeriBomba.push(numeroRandom);
    i++;
  }
}
console.log(numeriBomba);

// faccio scegliere la modalità al giocatore
var mod = prompt('digita facile,medio o  difficile per scegliere la modalita altrimenti è facile ');
// if (mod == 'facile') {
//   var numeriTotali = 100;
// } else if (mod == 'medio') {
//   var numeriTotali = 80;
// } else if (mod == 'difficile') {
//   var numeriTotali = 50;
// } else {
//   var numeriTotali = 100;
// }

//alternativa con switch
switch (mod) {
  case 'facile':
    var numeriTotali = 100;
  break;

  case 'medio':
    var numeriTotali = 80;
  break;

  case 'difficile':
    var numeriTotali = 50;
  break;

  default: var numeriTotali = 100
}
// console.log(numeriTotali);

//ciclo per chiedere numero e verifico se esiste nei numeriBomba se no aggiungo in arrayPunteggio una lettera per controllare il risulto con.lenght
// verifico con arrayNumeri se il numero immesso è stato gia inserito se si faccio immettere un nuovo numero
var b = 0; /*contatore*/
var arrayPunteggio = []; /* array per contare il punteggio con il .length*/
var arrayNumeri = []; /* array per numeri e verifico se non è gia stato immesso*/
while (b < (numeriTotali - 16)) {
  var num = parseInt(prompt('numero da 1 a 100'));
  while (ricercaArray(arrayNumeri,num) === true) {
      var num = parseInt(prompt('errore numero gia inserito rimetti un numero da 1 a 100'));
  }
  // if (ricercaArray(numeriBomba,num) === false) {
  //   arrayPunteggio.push('l');
  //   arrayNumeri.push(num);
  //   b++;
  // }else {
  //   b = 100;
  // }

  //alternativa con switch
  switch (ricercaArray(numeriBomba,num)) {
    case false:
      arrayPunteggio.push('l');
      arrayNumeri.push(num);
      b++;
    break;
    
    default:b = 100;
  }
}
// console.log(arrayNumeri);/*stampo array numeri inseriti*/


// stampo risultato grazie alla lunghezza dell'array [a]
// if (arrayPunteggio.join('').length !== (numeriTotali - 16)) {
//   console.log('bravo ma hai preso una bomba il tuo punteggio è : ' + arrayPunteggio.join('').length);
// } else if (arrayPunteggio.join('').length === (numeriTotali - 16)) {
//   console.log('hai vinto tt cos' + arrayPunteggio.join('').length);
// }

//alternativa con switch
switch (arrayPunteggio.join('').length) {
  case numeriTotali - 16:
    console.log('hai vinto tt cos' + arrayPunteggio.join('').length);
    break;

  default:console.log('bravo ma hai preso una bomba il tuo punteggio è : ' + arrayPunteggio.join('').length);
}
