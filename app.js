/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let activePlayer, roundScores, totalScores, dice;

init();

// Add Event Listeners
document.querySelector('.btn-hold').addEventListener('click',changePlayer);
document.querySelector('.btn-roll').addEventListener('click',rollDice);
document.querySelector('.btn-new').addEventListener('click',init);

// Event Listener methods
function changePlayer() {
    firstPlayerElement = document.querySelector('.player-0-panel');
    secondPlayerElement = document.querySelector('.player-1-panel')
    scoreInFocus = document.querySelector('#score-'+activePlayer);
    currentScoreInFocus = document.querySelector('#current-'+activePlayer);
    
    scoreInFocus.textContent = parseInt(scoreInFocus.textContent) + totalScores[activePlayer];
    currentScoreInFocus.textContent = 0;
    totalScores[activePlayer] = 0;
    
    if(activePlayer === 1) {
        activePlayer=0;
        firstPlayerElement.className += ' active';
        secondPlayerElement.className = 'player-1-panel';
    }
    else{
        activePlayer=1;
        firstPlayerElement.className = 'player-0-panel';
        secondPlayerElement.className += ' active';
    }
}

function rollDice(){
    // Get random dice number 
    dice = Math.floor(Math.random()*6) + 1;

    if(dice === 1){
        totalScores[activePlayer] = 0;

        // Turn players if dice turns to 1
        changePlayer();
    }
    else{
        // Add to previous dice scores 
        totalScores[activePlayer] += dice;
    }

    // Display result 
    document.querySelector('#current-'+activePlayer).textContent = totalScores[activePlayer];

    // Change dice image
    document.querySelector('.dice').src = 'images/dice-'+dice+'.png';
}

function init(){
    roundScore = 0;
    activePlayer = 0;
    totalScores = [0,0];
    document.querySelectorAll('.player-score').forEach(el => el.textContent = 0);
    document.querySelectorAll('.player-current-score').forEach(el => el.textContent = 0);
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

