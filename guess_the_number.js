const restart = document.querySelector('#restart');//кнопка переграти
const chosenNumberBox = document.querySelector('#chosenNumberBox')//загадане число
const inputNumber = document.querySelector('#inputNumber')
const sendButton = document.querySelector('#sendButton')//надсилання інпута
const attemptsBox = document.querySelector('#attemptsBox')//великий дів зі спробами
const attemptsArr = document.querySelector('#attemptsArr')//перелік спроб
const attemptsPopup = document.querySelector('#attemptsPopup')//великий дів зі спробами popup


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

restart.addEventListener('click', async () => {
    window.location.reload(); 
});

const chosenNumber = getRandomNumber(1, 100);
let attempt = 0;

const chosenNumberBoxHTML = `
    <h1 class="chosenNumber">${chosenNumber}</h1>
`;

const attemptsAllHTML = `
    <span>${attempt}</span>
`;

sendButton.addEventListener('click', async () => {
    if (!inputNumber.value.trim()) {
        alert("Please enter the number");
        return;
    }

    if (inputNumber = chosenNumber) {
        //вивести popup
    } else{
        attempt++
        //chosenNumberBox.insertAdjacentHTML('afterbegin', chosenNumberBoxHTML);
    }
});


chosenNumberBox.insertAdjacentHTML('afterbegin', chosenNumberBoxHTML);