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

function processClick(clickId) {
    const gameScoreBoard = document.querySelector("#scoreboard");
    let humanScoreText = document.querySelector(".human-score");
    let computerScoreText = document.querySelector(".computer-score");

    if (clickId === "reset") {
        humanScore = 0;
        humanScoreText.textContent = "0";
        computerScore = 0;
        computerScoreText.textContent = "0";

        const logs = document.querySelectorAll(".log")
        logs.forEach((l) => l.remove());
        
    } else if (humanScore < 5 && computerScore < 5) {
        let humanChoice = clickId;
        let computerChoice = getComputerChoice();
        let roundLog = document.createElement("p");
        roundLog.classList.add("log");
      
        if (humanChoice === computerChoice) {
            roundLog.textContent = `you picked ${humanChoice}, computer picked ${computerChoice}. draw!`;
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            humanScoreText.textContent = humanScore;
            roundLog.textContent = `you picked ${humanChoice}, computer picked ${computerChoice}. human wins!`
        }
        else {
            computerScore++;
            computerScoreText.textContent = computerScore;
            roundLog.textContent = `you picked ${humanChoice}, computer picked ${computerChoice}. computer wins!`
        };
        
        gameScoreBoard.appendChild(roundLog);

        if (humanScore === 5) {
            let finalGameLog = document.createElement("p");
            finalGameLog.classList.add("log");
            finalGameLog.textContent = "*** HUMAN WINS THE GAME ***";
            gameScoreBoard.appendChild(finalGameLog);
        } else if (computerScore === 5) {
            let finalGameLog = document.createElement("p");
            finalGameLog.classList.add("log");
            finalGameLog.textContent = "*** COMPUTER WINS THE GAME***";
            gameScoreBoard.appendChild(finalGameLog);
        }
    
    } else {
        // say game is already over
        alert("Game ends at 5! Reset the game to play again.")
    }
};

function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            processClick(button.id, humanScore, computerScore);
        })
    });
};

let humanScore = 0;
let computerScore = 0;

playGame();