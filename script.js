function getComputerChoice() {
    let randVar = Math.random();

    if (randVar <= 1 / 3) {
        return "rock"
    }
    else if (randVar <= 2 / 3) {
        return "paper"
    }
    else {
        return "scissors"
    };
};

function getHumanChoice() {
    let humanChoice = prompt("choose rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    while (!validChoices.includes(humanChoice)) {
        humanChoice = prompt(`invalid input. you can only choose rock, paper or scissors`);
        humanChoice = humanChoice.toLowerCase();
    };
    return humanChoice;
};

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`draw! \tScoreboard -> H: ${humanScore} - C: ${computerScore}`);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`human wins! \tScoreboard -> H: ${humanScore} - C: ${computerScore}`);
    }
    else {
        computerScore++;
        console.log(`computer wins! \tScoreboard -> H: ${humanScore} - C: ${computerScore}`);
    };
};

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Starting round ${i}. H: ${humanChoice}\tC: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }
    console.log(`---FINAL SCORES---\nH: ${humanScore} - C: ${computerScore}`)
};

let humanScore = 0;
let computerScore = 0;

playGame();
