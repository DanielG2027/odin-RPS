
const buttons = document.querySelectorAll('button');
buttons.forEach(function(btn) {
    btn.addEventListener('click', event => {
        const humanSelection = event.target.id;
        playGame(humanSelection, getComputerChoice());
    })
});
const results = document.querySelector('#results');
const resultMessage = document.createElement('h3');
const score = document.createElement('h2');
results.appendChild(score);
results.appendChild(resultMessage); 

// Game logic for Rock, Paper, Scissors
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    switch (`${humanChoice}-${computerChoice}`) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            humanScore++;
            score.textContent = `${humanScore}\t ${computerScore}`
            resultMessage.textContent = `You won!\n ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
            break;
        case "paper-scissors":
        case "rock-paper":
        case "scissors-rock":
            computerScore++;
            score.textContent = `${humanScore}\t ${computerScore}`;
            resultMessage.textContent = `You lost!\n ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
            break;
        default:
            resultMessage.textContent = `You tied!\n ${humanChoice.toUpperCase()} doesn't beat ${computerChoice.toUpperCase()}`;
            score.textContent = `${humanScore}\t ${computerScore}`
            break;
    }
}

function playGame(humanSelection, computerSelection){
    playRound(humanSelection, computerSelection);

    if(humanScore >= 5 || computerScore >= 5){
        if(humanScore > computerScore){
            resultMessage.textContent = `\nCongratulations! \nYou beat the computer ${humanScore} to ${computerScore}`;
        }
        else if(computerScore > humanScore){
            resultMessage.textContent = `\nThat's too bad! \nThe score was ${humanScore} to ${computerScore}`;
        }
        else{
            resultMessage.textContent = `\nIt was so close! Try again to beat the computer. \nThe score was ${humanScore} to ${computerScore}`;
        }
        humanScore = 0;
        computerScore = 0;
    }
}




