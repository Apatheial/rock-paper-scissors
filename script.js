const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 2) {
        return "Rock";
    } else if (choice === 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

const getHumanChoice = () => {
    const humanChoice = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
    const capitalizedHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    return capitalizedHumanChoice;
}


const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) => {
        if (humanChoice === computerChoice) {
            return console.log(`It's a tie!`);
        } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || 
                   (humanChoice === "Scissors" && computerChoice === "Paper") || 
                   (humanChoice === "Paper" && computerChoice === "Rock")) {
            humanScore++;
            return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else {
            computerScore++;
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        }
    }

    for (let rounds = 1; rounds <= 5; rounds++) {
        console.log(`=============START ROUND ${rounds}=============`);
        playRound();
        console.log(`=============END ROUND ${rounds}=============`);
    }

    console.log(`YOU: 0${humanScore}`);
    console.log(`COMPUTER: 0${computerScore}`);

    if (humanScore === computerScore) {
        return "The game ends in a tie!";
    } else if (humanScore > computerScore) {
        return "You win!";
    } else {
        return "You Lose!";
    }
}