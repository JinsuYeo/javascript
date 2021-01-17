'use strict';

const players = document.querySelectorAll('.player');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score = document.querySelectorAll('.score');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const currentScore = document.querySelectorAll('.current-score');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btns = document.querySelectorAll('.btn');
const btnRegame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



let currentValue = 0;
let scoreValue1 = 0;
let scoreValue2 = 0;

const currentScoreNodeFn = function(arrEl) {
    const currentScoreNode = arrEl.children[2].children[1];
    return currentScoreNode.textContent = currentValue;
}

const changePlayer = function() {
    players.forEach(function(player) {
        if(player.classList.contains('player--active')) {
            player.classList.remove('player--active');
            currentValue = 0;

            currentScoreNodeFn(player);
        } else {
            player.classList.add('player--active');
        }
    });
}

const defaultUI = function() {
for(let i = 0; i < players.length; i++) {
    if(player2.classList.contains('player--active')) {
      changePlayer();
    }
    score[i].textContent = 0;
    currentScore[i].textContent = 0;

    currentValue = 0;
    scoreValue1 = 0;
    scoreValue2 = 0;
    if(players[i].classList.contains('player--winner')) {
        players[i].classList.remove('player--winner');
    }
};

dice.style.display = 'none';
}
defaultUI();

const scoreNode = [].map.call(players, function(e) {
    return e.children[1];
})


const diceRoll = function() {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    dice.style.display = 'block'
    
    if(scoreValue1 >= 100 || scoreValue2 >= 100) {
        return;
        } else if(diceNumber === 1) {
        changePlayer();
        } else {
        currentValue += diceNumber;
        players.forEach(function(player) {
            if(player.classList.contains('player--active')) {
                currentScoreNodeFn(player);
            }
        });
    }
    dice.src = `dice-${diceNumber}.png`;
};

const scoreHold = function() {
    if(player1.classList.contains('player--winner') || player2.classList.contains('player--winner')){
        return;
    } else if(player1.classList.contains('player--active')) {
        scoreValue1 += currentValue
        scoreNode[0].textContent = scoreValue1;
        if(scoreValue1 >= 100) {
            player1.classList.add('player--winner');
        }
    } else {
        scoreValue2 += currentValue
        scoreNode[1].textContent = scoreValue2;
        if(scoreValue2 >= 100) {
            player2.classList.add('player--winner');
        }
    }

    changePlayer();
}








btnRegame.addEventListener('click', defaultUI);
btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', scoreHold);













