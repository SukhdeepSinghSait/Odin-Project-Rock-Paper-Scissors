console.log('Hello, world!');
let humanScore = 0;
let computerScore = 0;
let getHumanChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
};

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
console.log(getComputerChoice());
let playRound = (userChoice, computerChoice) => {
    console.log(`You chose ${userChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return 'You win! Rock beats Scissors';  
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You win! Scissors beats Paper';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        return 'You win! Paper beats Rock';
    } else {
        computerScore++;
        return 'You lose! Computer wins!';
    }
}
let playGame = () => {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        console.log(playRound((getHumanChoice(prompt("Pick one Rock, Paper or Scissors"))), getComputerChoice()));
    }
    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (humanScore < computerScore) {
        console.log('You lose the game!');
    } else {
        console.log('It\'s a tie!');
    }
    console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
}
playGame();

