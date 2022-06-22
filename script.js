/**
 * 
 * utente sceglie pari o dispari tramite prompt
 * utente sceglie un numero tramite propt, compreso tra 1 e 5
 * il pc genera numero random tra 1 e 5
 * si sommano i due numeri e se si stabilisce se pari o dispari
 * 
 * 
 * 
 * 
 * 
 */
// Essercizio Pari e Dispari


const evenOddUserChoice = prompt('Scrivi Pari o Dispari');

if (evenOddUserChoice === 'Pari') {
    console.log('Pari');

} else if (evenOddUserChoice === 'Dispari') {
    console.log('Dispari');

} else {
    console.log('Scegli e riscrivi correttamente o Pari o Dispari in base alla tua scelta');
}


const userNumberChoice = parseInt(prompt('Scegli un numero da 1 a 5'));

if ( userNumberChoice < 1 || userNumberChoice > 5)






function calcNumberRandom(min, max){
    return Math.floor(Math.random() * (6 - 1) +1);
}

console.log(calcNumberRandom());

