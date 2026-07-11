const restart = document.querySelector('#restart');
const chosenNumberBox = document.querySelector('#chosenNumberBox')

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const chosenNumber = getRandomNumber(1, 100);


restart.addEventListener('click', async () => {
    window.location.reload(); 
});


const chosenNumberBoxHTML = `
    <h1 class="chosenNumber">${chosenNumber}</h1>
`;


chosenNumberBox.insertAdjacentHTML('afterbegin', chosenNumberBoxHTML);