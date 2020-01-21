// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Consigli del giorno:
// Partite sempre dalla logica e poi passate a scrivere in js.
// Usate le slide per vedere la sintassi delle nuove cose studiate :)
// Pushate ogni piccolo passo in avanti!
// ----------------------------------------------------------------------
// fare un alert e inserire mathrandom fino a 5 numeri
// azionare il timer di 30 secondi
// inserire con 5 prompt i numeri di prima
// mostrare quanti numeri sono stati indovinati
// ----------------------------------------------------------------------

var arrayNumeri = [];
var arrayResult = [];

var i = 0;
do{
  var numeriCasuali = getRandomIntInclusive(1, 100);
  arrayNumeri.push(numeriCasuali);
  i++;
}while(i < 5)
alert(arrayNumeri);
console.log(arrayNumeri);

setTimeout(promptResult(arrayResult), 3000);

// if(arrayNumeri[i] == arrayResult[i]){
//   console.log("c'è corrispondenza");
// }else{
//   console.log("non c'è corrispondenza");
// }



// ------FUNZIONI------
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function promptResult (array){
  for(var i = 1; i < 6; i++){
    var result = parseInt(prompt('Inserisci il ' + i + ' numero'));
    array.push(result);
  }
  console.log(array);
  return result;
}
