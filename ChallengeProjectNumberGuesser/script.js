let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*9); // random target between 0-9
}


function compareGuesses(human,computer, target){ //return true if the player wins 
    if(Math.abs(human-target)<= Math.abs(computer-target)){
        return true;
    }
    return false;

}

function updateScore(str){ //update score based on str input (either human or computer)
    if(str === "human"){
        humanScore++;
    }else{
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}

