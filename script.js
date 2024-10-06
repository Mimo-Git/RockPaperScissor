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

    console.log(humanChoice);
    console.log(computerChoice);

    // Logique pour déterminer le gagnant de la manche
    const roundResult = document.querySelector(".roundResult");
    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! You both chose ${humanChoice}.`

        // console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
        // console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
        // console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    const score = document.querySelector(".score");

    if (humanScore !== 5 && computerScore !== 5) {
        score.textContent = `Human score : ${humanScore} \n Computer Score : ${computerScore}`
    } else {
        score.textContent = '';
        roundResult.textContent = '';
        // Annoncer le gagnant final
        const finalResult = document.querySelector(".finalResult");

        if (humanScore > computerScore) {
            finalResult.textContent = `You win the game! Final score: Human ${humanScore}, Computer ${computerScore}.`
            // console.log(`You win the game! Final score: Human ${humanScore}, Computer ${computerScore}.`);
        } else if (computerScore > humanScore) {
            // console.log(`You lose the game! Final score: Human ${humanScore}, Computer ${computerScore}.`);
            finalResult.textContent = `You lose the game! Final score: Human ${humanScore}, Computer ${computerScore}.`
        } else {
            finalResult.textContent = `It's a tie! Final score: Human ${humanScore}, Computer ${computerScore}.`
            // console.log(`It's a tie! Final score: Human ${humanScore}, Computer ${computerScore}.`);
        }
        button.disabled;

    }
}

function playGame() {
    // Réinitialiser les scores
    humanScore = 0;
    computerScore = 0;

    // // Jouer 5 manches
    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {

            let choice = e.target.textContent
            playRound(choice, getComputerChoice());
        })
    });

}

// Lancer le jeu
playGame();