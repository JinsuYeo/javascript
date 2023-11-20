'use strict';
const body = document.querySelector('body')
const btnAgain = document.querySelector('.btn.again');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.btn.check');
const guess = document.querySelector('.guess');
const correctNumber = document.querySelector('.number');



const randomNumber = Math.trunc(Math.random()*20) + 1;
// console.log(randomNumber);

const rankedScore = localStorage.getItem('highScore');
highScore.textContent = rankedScore ? rankedScore : 0;
let scoreValue = 20;


const checkFn = function() {
    const guessNumber = Number(guess.value);

    if(!guessNumber) {
        message.textContent = 'No number!'
        return;
    } else if(guessNumber === randomNumber) {
        message.textContent = 'Correct number!'
        correctNumber.textContent = `${guessNumber}`;
        body.style.background = '#60b347'
        correctNumber.style.width = '30rem';
        btnCheck.style.pointerEvents = 'none';
        btnCheck.style.cursor = 'inherit';

        //highscore 구현    
        if(scoreValue > rankedScore) {
            localStorage.setItem('highScore', scoreValue);
            highScore.textContent = scoreValue;
        }
        return;
    } else if(guessNumber < 1 || guessNumber > 20){
        message.textContent = 'beetween 1 and 20!';
        return;
    } else if(guessNumber < randomNumber) {
        message.textContent = 'Too low!';
    } else if(guessNumber > randomNumber) {
        message.textContent = 'Too high!';
    } 

    guess.value = '';
    scoreValue--;
    score.textContent = scoreValue;

    if(scoreValue === 0) {
        message.textContent = 'You lost the game!';
        btnCheck.style.pointerEvents = 'none';
        btnCheck.style.cursor = 'inherit';
        body.style.opacity = 0.7;
    }
};







btnAgain.addEventListener('click', () => window.location.reload());
btnCheck.addEventListener('click', checkFn);
 