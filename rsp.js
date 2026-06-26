function getComputerChoice() {

    let number = Math.random();
    let choice = "";

    if (number < 0.33) {
        choice = "rock";
    } else if (number < 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    
    return choice;
}

// function getHumanChoice() {
//     return prompt("Rock, Paper, or Scissors?: ");
// }

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let roundsPlayed = 0

    const buttons = document.querySelectorAll(".choice")
    
    buttons.forEach(button => {
        button.addEventListener('click', (e)=> {
            if (roundsPlayed >= 5) return;
            let selection = e.target.dataset.choice;

            switch(selection) {
                case 'rock':
                    playRound('rock', getComputerChoice());
                    break;
                case 'paper':
                    playRound('paper', getComputerChoice());   
                    break;             
                case 'scissors':
                    playRound('scissors', getComputerChoice());
                    break;
            }

            roundsPlayed++

            if (roundsPlayed === 5) {
                if (humanScore < computerScore) {
                    result.textContent = "Computer wins!!";
                } else if (humanScore > computerScore) {
                    result.textContent = "You win!";
                } else {
                    result.textContent = "It's a tie!";
                }
            }
        })
    })

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            result.textContent = "You are tied!"
        } else if ((humanChoice == "scissors")&&(computerChoice == "paper") ) {
            result.textContent = "You win! Scissors beats paper"
            humanScore += 1
        } else if ((humanChoice == "scissors")&&(computerChoice == "rock") ) {
            result.textContent = "You lose! Rock beats scissors"
            computerScore += 1
        } else if ((humanChoice == "rock")&&(computerChoice == "scissors") ) {
            result.textContent = "You win! Rock beats scissors"
            humanScore += 1
        } else if ((humanChoice == "rock")&&(computerChoice == "paper") ) {
            result.textContent = "You lose! Paper beats rock"
            computerScore += 1
        } else if ((humanChoice == "paper")&&(computerChoice == "rock") ) {
            result.textContent = "You win! Paper beats rock"
            humanScore += 1
        } else if ((humanChoice == "paper")&&(computerChoice == "scissors") ) {
            result.textContent = "You lose! Scissors beats paper"
            computerScore += 1
        }
        score.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    }
}

playGame();