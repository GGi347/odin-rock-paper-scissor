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


playerPlay();