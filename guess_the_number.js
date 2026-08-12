const restart = document.querySelector('#restart');//кнопка переграти
const chosenNumberBox = document.querySelector('#chosenNumberBox')//загадане число
const inputNumber = document.querySelector('#inputNumber')
const sendButton = document.querySelector('#sendButton')//надсилання інпута
const attemptsBox = document.querySelector('#attemptsBox')//великий дів зі спробами
const attemptsArr = document.querySelector('#attemptsArr')//перелік спроб!
const attemptsPopup = document.querySelector('#attemptsPopup')//великий дів зі спробами popup
const modal = document.querySelector('#modal')

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


// Функція для оновлення значення спроб на екрані
function updateAttempts() {
    attemptsBox.textContent = attempt;
    attemptsPopup.textContent = attempt;
}

// Початкове відображення (0)
updateAttempts();

sendButton.addEventListener('click', async () => {
    if (!inputNumber.value.trim()) {
        alert("Please enter the number");
        return;
    }

    const userGuess = Number(inputNumber.value);
    attempt++;
    updateAttempts();
    
    if (userGuess === chosenNumber) {
        const modal = document.querySelector('dialog');
        modal.showModal()
    } else if (userGuess > chosenNumber) {
        const attemptsArrMoreHTML = `
            <div class="attemptsArrElement">
                <p>${userGuess}</p>
                <svg class="arrow" style="transform: rotate(90deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="30" height="30" shape-rendering="crispEdges">
                    <rect x="1" y="4" width="8" height="1" fill="black" />

                    <rect x="5" y="1" width="1" height="1" fill="black" />
                    <rect x="6" y="2" width="1" height="1" fill="black" />
                    <rect x="7" y="3" width="1" height="1" fill="black" />

                    <rect x="7" y="5" width="1" height="1" fill="black" />
                    <rect x="6" y="6" width="1" height="1" fill="black" />
                    <rect x="5" y="7" width="1" height="1" fill="black" />
                </svg>
            </div>
        `;
        attemptsArr.insertAdjacentHTML('afterbegin', attemptsArrMoreHTML);
    } else {
        const attemptsArrMoreHTML = `
            <div class="attemptsArrElement">
                <p>${userGuess}</p>
                <svg class="arrow" style="transform: rotate(270deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="30" height="30" shape-rendering="crispEdges">
                    <rect x="1" y="4" width="8" height="1" fill="black" />

                    <rect x="5" y="1" width="1" height="1" fill="black" />
                    <rect x="6" y="2" width="1" height="1" fill="black" />
                    <rect x="7" y="3" width="1" height="1" fill="black" />

                    <rect x="7" y="5" width="1" height="1" fill="black" />
                    <rect x="6" y="6" width="1" height="1" fill="black" />
                    <rect x="5" y="7" width="1" height="1" fill="black" />
                </svg>
            </div>
        `;
        attemptsArr.insertAdjacentHTML('afterbegin', attemptsArrMoreHTML);
    }
    inputNumber.value = "";
});

chosenNumberBox.insertAdjacentHTML('afterbegin', chosenNumberBoxHTML);