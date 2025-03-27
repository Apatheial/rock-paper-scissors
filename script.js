let rounds = 0;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ["Rock", "Scissors", "Paper"];
    return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = (humanChoice, computerChoice) => {
    const boardRoundText = document.querySelector(".round");
    const boardPlayerScoreText = document.querySelector(".player-score");
    const boardComputerScoreText = document.querySelector(".computer-score");

    rounds++;
    boardRoundText.textContent = `0${rounds}`;

    if ((humanChoice === "Rock" && computerChoice === "Scissors") 
        || (humanChoice === "Scissors" && computerChoice === "Paper") 
        || (humanChoice === "Paper" && computerChoice === "Rock")) {
        humanScore++;
        boardPlayerScoreText.textContent = `0${humanScore}`;
    } else if ((computerChoice === "Rock" && humanChoice === "Scissors") 
        || (computerChoice === "Scissors" && humanChoice === "Paper") 
        || (computerChoice === "Paper" && humanChoice === "Rock")) {
        computerScore++;
        boardComputerScoreText.textContent = `0${computerScore}`;
    }

    if (rounds === 5) {
        displayGameResult();
    }
}

const calculateGameResult = () => {
    if (humanScore === computerScore) {
        return "The game ends in a tie!";
    } else if (humanScore > computerScore) {
        return "You win!";
    } else {
        return "You Lose!";
    }
}

const commandButtonDisable = (option) => {
    const commandButtons = document.querySelectorAll("button");

    commandButtons.forEach((button) => {
        button.disabled = option;
    });
}

const restartGame = (resultElement) => {
    rounds = 0;
    humanScore = 0;
    computerScore = 0;

    const scoreBoardText = document.querySelectorAll(".score-text");

    scoreBoardText.forEach((p) => {
        p.textContent = "00";
    });

    commandButtonDisable(false);

    resultElement.remove();
}

const displayGameResult = () => {
    const scoreBoard = document.querySelector("#results");

    commandButtonDisable(true);

    const div = document.createElement("div");
    div.setAttribute("class", "score flex");

    const resultText = document.createElement("p");
    resultText.textContent = calculateGameResult();

    const btnPlayAgain = document.createElement("button");
    btnPlayAgain.textContent = "Restart!";
    btnPlayAgain.addEventListener("click", () => {
        restartGame(div);
    });

    div.append(resultText, btnPlayAgain);
    scoreBoard.appendChild(div);
}

const choiceButtons = document.querySelectorAll("button");

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});