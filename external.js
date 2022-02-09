const OPTIONS = ["rock", "paper", "scissor"];

function computerPlay() {
    const computerChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    console.log(computerChoice);
    return computerChoice;
}
const p = document.querySelector('p');
alert(computerPlay());


