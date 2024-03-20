/* Descrizione:
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

//funzione per generare numeri randomici
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function generateGameNumber () {
    let randomNumbers = [];
    while (randomNumbers.length < 5) {
        let divElement = document.createElement('div');
        divElement.classList.add('box');
        let containerElement = document.getElementById('container');
        containerElement.appendChild(divElement);
        let numbers = getRndInteger(1, 100);
        divElement.textContent = numbers;
        if(!randomNumbers.includes(numbers)) {
            randomNumbers.push(numbers);
        }
    } return randomNumbers;    
}

console.log(generateGameNumber());


