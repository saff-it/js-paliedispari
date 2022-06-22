



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

if ( userNumberChoice < 1 || userNumberChoice > 5) {
    console.log("Numero errato. Inserisci un numero da 1 a 5.");

} else if ( isNaN(userNumberChoice) ){
    console.log("Fai attenzione a scrivere un NUMERO, compreso tra 1 e 5.");

} else {
    console.log(userNumberChoice);

}



function calcNumberRandom(min, max){
    return Math.floor(Math.random() * (6 - 1) +1);
}

function isEven(numeroUser, numeroPc){
    if ( (numeroUser + numeroPc) % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}


const cpuNumber = calcNumberRandom(1, 5);
console.log(cpuNumber);

isEven(userNumberChoice, cpuNumber);
console.log(isEven());



if ( isEven(userNumberChoice, cpuNumber) == true && evenOddUserChoice === 'Pari' ) {
    console.log("Hai Vinto!");

} else if ( isEven(userNumberChoice, cpuNumber) == false && evenOddUserChoice === 'Dispari' ) {
    console.log("Hai Vinto!");

} else {
    console.log("Hai Perso!");

}