function getComputerChoice() {
    // Générer un nombre aléatoire entre 0 et 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Retourner "rock", "paper" ou "scissors" en fonction du nombre généré
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // Demander à l'utilisateur d'entrer son choix
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    // Valider le choix de l'utilisateur
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Rendre les choix insensibles à la casse
    humanChoice = humanChoice.toLowerCase();

    // Logique pour déterminer le gagnant de la manche
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
    // Réinitialiser les scores
    humanScore = 0;
    computerScore = 0;

    // Jouer 5 manches
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Annoncer le gagnant final
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: Human ${humanScore}, Computer ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final score: Human ${humanScore}, Computer ${computerScore}.`);
    } else {
        console.log(`It's a tie! Final score: Human ${humanScore}, Computer ${computerScore}.`);
    }
}

// Lancer le jeu
playGame();