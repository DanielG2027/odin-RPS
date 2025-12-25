let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const intRand = Math.random();
    let rpsSelect = null;
    if (intRand <= 0.33){
        rpsSelect = "Rock";
    }
    else if(intRand <= 0.66){
        rpsSelect = "Paper";
    }
    else{
        rpsSelect = "Scissors";
    }
    return rpsSelect;
}

function getHumanChoice(){
    const humanInput = prompt("Rock, Paper, Scissors, Shoot!\nType 1 for rock, 2 for paper, and 3 for scissors.");
    let humanRpsSelect = null;
    if (parseInt(humanInput) == 1){
        humanRpsSelect = "Rock";
    }
    else if (parseInt(humanInput) == 2){
        humanRpsSelect = "Paper";
    }
    else if (parseInt(humanInput) == 3){
        humanRpsSelect = "Scissors";
    }
    else{
        humanRpsSelect = "Oops! Invalid input. Try again please!"
    }
    return humanRpsSelect;
}

console.log(getHumanChoice());
