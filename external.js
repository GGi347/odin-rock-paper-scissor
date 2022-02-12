const OPTIONS = ["rock", "paper", "scissors"];
const TOTALROUNDS = 5;
let numberOfRounds = 0; 
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const computerChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    return computerChoice;
}


// rules of the game
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection
    const computerChoice = computerSelection();
    let answer;
    if (playerChoice === computerChoice) {
        displayResult(playerChoice, computerChoice, "It's a draw. Life is fair!")
        answer = "draw";
    }else if (playerChoice === "rock" && computerChoice === "paper") {
        displayResult(playerChoice, computerChoice,"You Loose! Happens to the best of us!");
        answer  = "computer";
    } else if (playerChoice === "rock" && computerChoice === "scissors"){
        displayResult(playerChoice, computerChoice,"You Win! Go Celebrate!");
        answer =  "player";
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        displayResult(playerChoice, computerChoice,"You Win! Go Celebrate!");
        answer =  "player";
    } else if (playerChoice === "paper" && computerChoice === "scissors"){
        displayResult(playerChoice, computerChoice,"You Loose! Happens to the best of us!");
        answer = "computer";
    } else if (playerChoice === "scissors" && computerChoice === "paper"){
        displayResult(playerChoice, computerChoice,"You Win! Go Celebrate!");
        answer =  "player";
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        displayResult(playerChoice, computerChoice,"You Loose! Happens to the best of us!");
        answer =  "computer";
    } 
    return answer;

}

function game(answer) {
    if (answer.toLowerCase() === "player") {
        playerScore += 1;
    } else if (answer.toLowerCase() === "draw") {
        playerScore += 1;
        computerScore += 1;
    } else {
        computerScore += 1;
    }  
    numberOfRounds += 1;  
    if (numberOfRounds === TOTALROUNDS) {
        let msg;
        if (playerScore > computerScore) {
            msg  = (`Congragulations! You won the game!`);
        } else if (computerScore > playerScore){
            msg  = (`Sorry! You lost the game!`);
        }
        else {
            msg = (`It is a draw!`);
        }
        numberOfRounds = 0;
        computerScore = 0;
        playerScore = 0;
        return msg;
    }    
    
}
       

function displayResult(playerChoice="", computerChoice="", msg="") {
    const resultDiv = document.querySelector("#round-result");
    resultDiv.textContent = msg;

    const playerDiv = document.querySelector("#player-choice");
    playerDiv.style.textTransform = "capitalize";
    playerChoice ? playerDiv.textContent = `You Choose: ${playerChoice}`: " ";

    const computerDiv = document.querySelector("#computer-choice");
    computerDiv.style.textTransform = "capitalize";
    computerDiv.textContent = `Computer Choose: ${computerChoice}`;
}

function setScore() {
    const yourScore = document.querySelector("#your-score");
    yourScore.textContent = `Your Score ${playerScore}`;

    const compScore = document.querySelector("#computer-score");
    compScore.textContent = `Computer Score ${computerScore}`;

    const roundNum = document.querySelector("#num-of-rounds");
    roundNum.textContent = `Number of Rounds Remaining ${TOTALROUNDS - numberOfRounds}`;
}


const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener(
        'click', (e) => {     
            let answer = playRound(e.target.textContent.toLowerCase(), computerPlay);           
            let msg = game(answer);
            setScore();
            if (numberOfRounds == 0) {
                displayResult();
            }
            if(msg) alert(msg);
        }
    );
});