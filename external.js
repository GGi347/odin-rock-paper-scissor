const OPTIONS = ["rock", "paper", "scissor"];

function computerPlay() {
    const computerChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    console.log(computerChoice);
    return computerChoice;
}

// prompt player to choose:
function playerPlay() {
    const playerChoice = prompt("Rock Paper Or Scissor?")
    console.log(playerChoice.toLowerCase());
    return playerChoice.toLowerCase();
}

// rules of the game
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection();
    const computerChoice = computerSelection();
    if (playerChoice === computerChoice) {
        console.log("It's a draw. Life is fair!")
        return "draw";
    }else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You Loose! Happens to the best of us!");
        return "computer";
    } else if (playerChoice === "rock" && computerChoice === "scissor"){
        console.log("You Win! Go Celebrate!");
        return "player";
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Go Celebrate!");
        return "player";
    } else if (playerChoice === "paper" && computerChoice === "scissor"){
        console.log("You Loose! Happens to the best of us!");
        return "computer";
    } else if (playerChoice === "scissor" && computerChoice === "paper"){
        console.log("You Win! Go Celebrate!");
        return "player";
    } else if (playerChoice === "scissor" && computerChoice === "rock"){
        console.log("You Loose! Happens to the best of us!");
        return "computer";
    } else {
        console.log("That is not a valid input. Enter again.")
        return playRound(playerSelection, computerSelection);
    } 

}

function game() {
    let count = 0;
    let numberOfRounds = 5;
    for (let i = 0; i< numberOfRounds; i++) {
        let answer = playRound(playerPlay, computerPlay);
        if (answer.toLowerCase() === "player" || answer.toLowerCase() === "draw") {
            count++;
        }
    }
    if (count >= 3) {
        console.log(`Congragulations! You won the game! Your Score: ${count}/${numberOfRounds}`);
    } else {
        console.log(`Sorry! You lost the game! Your Score: ${count}/${numberOfRounds}`);
    }
}

game();