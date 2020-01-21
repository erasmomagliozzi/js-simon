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

var i = 0;
do{
  var numeriCasuali = getRandomIntInclusive(1, 100);
  arrayNumeri.push(numeriCasuali);
  i++;
}while(i < 5)
alert(arrayNumeri);
console.log(arrayNumeri);

setTimeout(promptResult, 3000);




// ------FUNZIONI------
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function promptResult (){
  var arrayResult = [];
  var listaNumeri = [];
  var i = 1;
  while(i < 6){ //qui sarebbe piu corretto avere un while e controllare se i numeri inseriri sono diversi
    var result = parseInt(prompt('Inserisci il ' + i + ' numero'));
    arrayResult.push(result);
    i++;
  }
  //faccio confronto

  var j = 0;
  while(j < arrayNumeri.length){
      if(arrayResult[j] == arrayNumeri[j]){
        listaNumeri.push(arrayResult[j]);
      }
      j++;
    }
  alert('Hai indovinato ' + listaNumeri.length + ' numeri');
  alert('I numeri che hai indovinato sono ' + listaNumeri);

}
