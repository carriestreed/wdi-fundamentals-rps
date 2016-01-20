////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move|| getInput() ;
}

function getComputerMove(move) {
    return move|| randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (computerMove === 'rock' && playerMove === 'paper') {
        winner = 'player';
    } else if (computerMove === 'rock' && playerMove === 'scissors') {
        winner = 'computer';
    } else if (computerMove === 'paper' && playerMove === 'scissors') {
        winner = 'player';
    } else if (computerMove === 'scissors' && playerMove === 'paper') {
        winner = 'player';
    } else {
        winner = 'tie';
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
     while (playerWins <= 5 || computerWins <= 5) {
        var playerMove = getPlayerMove(randomPlay());
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === 'player') {
            playerWins ++;
            console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("Player Wins!");
        } else if (winner === 'computer') {
            computerWins ++;
            console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("Computer Wins!");
        } else {
            console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("TIE");
        }
    }
    return [playerWins, computerWins];
}

playToFive();