// elements
const adviceID = document.querySelector('.adviceId');
const adviceText = document.querySelector('.adviceText');
const generateButton = document.querySelector('.generate');
// fetch advice 
function fetchAdvice(){
    fetch("https://api.adviceslip.com/advice").then(q => q.json()).then(advice => {
        //advice id and advice here
        adviceID.innerText = advice.slip.id;
        adviceText.innerText = advice.slip.advice;
    })
}

generateButton.addEventListener('click', () => {
    fetchAdvice();
})