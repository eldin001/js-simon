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
  let userNumbers = [];
  let randomNumbers = [];
//funzione per generare i numeri del gioco e le box
function generateGameNumber () {
    while (randomNumbers.length < 5) {
        let divElement = document.createElement('div');
        divElement.classList.add('box');
        let containerElement = document.getElementById('container');
        containerElement.appendChild(divElement);
        let numbers = getRndInteger(1, 100);
        divElement.innerText = numbers;
        if(!randomNumbers.includes(numbers)) {
            randomNumbers.push(numbers);
        }
    } return randomNumbers;    
}

//funzione per prendere l'input dell'utente
function collectInput() {  
    userNumbers = [];
    console.log(userNumbers);
    for (let i = 1; i <= 5; i++) {
      let inputElement = document.getElementById(`input${i}`);
      const number = parseInt(inputElement.value);
      if (isNaN(number)) {
        alert(`Il valore inserito nell'input ${i} non è un numero.`);
        return;
      }
      userNumbers.push(number);
      
    }
}
//funzione per far sparire i numeri 
function hideNumbers() {
    const containerElement = document.getElementById('container');
    containerElement.style.display = 'none'; 
  }
//funzione per far riapparire l'area di input
function displayInputArea() {
    document.getElementById('input-container').style.display = 'flex'; 
}
//timeout
setTimeout(hideNumbers, 3000);
setTimeout(displayInputArea, 3000)
//funzione per prendere l'input dell'utente
function collectInput() {  
    userNumbers = [];
    console.log(userNumbers);
    for (let i = 1; i <= 5; i++) {
      let inputElement = document.getElementById(`input${i}`);
      const number = parseInt(inputElement.value);
      if (isNaN(number)) {
        alert(`Il valore inserito nell'input ${i} non è un numero.`);
        return;
      }
      userNumbers.push(number);
      
    }
}
//funzione timer

//funzione per comparare i numeri
function compareNumbers(userNumbers, randomNumbers) {
    let correctCount = 0;
    let correctNumbers = [];
    // Confronta ogni numero inserito con i numeri casuali
    for (let i = 0; i < userNumbers.length; i++) {
      if (randomNumbers.includes(userNumbers[i])) {
        correctCount++;
        correctNumbers.push(userNumbers[i]);
      }
    }
    return {
      correctCount,
      correctNumbers,
    };
  }
 
//elemento bottone genera numeri casuali
let generateNumbersButton = document.getElementById('generate-numbers');

generateNumbersButton.addEventListener('click', function() {
    generateGameNumber();
},{ once: true })
//elemento bottone invia valori input
let chechkNumberButton = document.getElementById('check-numbers');

chechkNumberButton.addEventListener('click', function() {
    collectInput() 
    const result = compareNumbers(userNumbers, randomNumbers);
    let outcomeElement = document.getElementById('outcome');
    outcomeElement.textContent = `Hai indovinato ${result.correctCount} numeri: ${result.correctNumbers.join(', ')}`  
})



