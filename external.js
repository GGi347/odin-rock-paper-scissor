const OPTIONS = ["rock", "paper", "scissors"];

function computerPlay() {
    const computerChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    console.log(computerChoice);
    return computerChoice;
}


// rules of the game
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection
    const computerChoice = computerSelection();
    if (playerChoice === computerChoice) {
        console.log("It's a draw. Life is fair!")
        return "draw";
    }else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You Loose! Happens to the best of us!");
        return "computer";
    } else if (playerChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win! Go Celebrate!");
        return "player";
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Go Celebrate!");
        return "player";
    } else if (playerChoice === "paper" && computerChoice === "scissors"){
        console.log("You Loose! Happens to the best of us!");
        return "computer";
    } else if (playerChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! Go Celebrate!");
        return "player";
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        console.log("You Loose! Happens to the best of us!");
        return "computer";
    } else {
        console.log("That is not a valid input. Enter again.")
        
    } 

}

// function game() {
//     let count = 0;
//     let numberOfRounds = 5;
//     for (let i = 0; i< numberOfRounds; i++) {
//         let answer = playRound(playerPlay, computerPlay);
//         if (answer.toLowerCase() === "player" || answer.toLowerCase() === "draw") {
//             count++;
//         }
//     }
//     if (count >= 3) {
//         console.log(`Congragulations! You won the game! Your Score: ${count}/${numberOfRounds}`);
//     } else {
//         console.log(`Sorry! You lost the game! Your Score: ${count}/${numberOfRounds}`);
//     }
// }

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener(
        'click', (e) => {
            playRound(e.target.textContent.toLowerCase(), computerPlay);
        }
    );
});
       