let humanScore = 0;
let computerScore = 0;

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
        console.log("You tied! " + computerChoice.toUpperCase() + " doesn't beat " + computerChoice.toUpperCase());
        return;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection + "\n" + computerSelection);
playRound(humanSelection, computerSelection);

