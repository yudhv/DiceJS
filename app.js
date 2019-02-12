/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let activePlayer, roundScores, currentScores, dice;

roundScores = [];
activePlayer = 0;
currentScores = [0,0];

// Put all values to zero on the DOM
document.querySelectorAll('.player-score').forEach(el => el.textContent = 0);
document.querySelectorAll('.player-current-score').forEach(el => el.textContent = 0);

// Add Event Listeners
document.querySelector('.btn-hold').addEventListener('click',playerChanger);
document.querySelector('.btn-roll').addEventListener('click',rollDice);

// Event Listener methods
function playerChanger() {
    activePlayer === 1 ? activePlayer=0 : activePlayer=1;
    document.querySelector()
}

function rollDice(){
    // Get random dice number 
    dice = Math.floor(Math.random()*6) + 1;

    // Display result 
    document.querySelector('#current-'+activePlayer).textContent = dice;

    // Change dice image
    document.querySelector('.dice').src = 'images/dice-'+dice+'.png';
}



