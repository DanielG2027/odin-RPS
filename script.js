function getComputerChoice(){
    const intRand = Math.random();
    let rpsSelect = null;
    if (intRand <= 0.33){
        rpsSelect = "rock";
    }
    else if(intRand <= 0.66){
        rpsSelect = "paper";
    }
    else{
        rpsSelect = "scissors";
    }
    return rpsSelect;
}

function getHumanChoice(){
    const humanInput = prompt("Rock, Paper, or Scissors?");
    return humanInput;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "scissors" || 
    humanChoice == "paper" && computerChoice == "rock" || 
    humanChoice == "scissors" && computerChoice == "paper"){
        humanScore ++;
        console.log("You won! " + humanChoice.toUpperCase() + " beats " + computerChoice.toUpperCase());
        return;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"
        || humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "scissors" && computerChoice == "rock"){
        computerScore ++;
        console.log("You lost! " + computerChoice.toUpperCase() + " beats " + humanChoice.toUpperCase());
        return;
    }
    else {
        console.log("You tied! " + humanChoice.toUpperCase() + " doesn't beat " + computerChoice.toUpperCase());
        return;
    }
}
    for(var i = 1; i <= 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore){
        console.log("You won! \nYou beat the computer " + humanScore + " to " + computerScore);
    }
    else if(computerScore > humanScore){
        console.log("You lost! The score was " + computerScore + " to " + humanScore);
    }
    else{
        console.log("It was so close! Try again to beat the computer. \nThe score was " + humanScore + " to " + computerScore);
    }
}

playGame();




