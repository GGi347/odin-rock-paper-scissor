const OPTIONS = ["rock", "paper", "scissors"];
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
    let msg;
    if (playerChoice === computerChoice) {
        msg = "It's a draw. Life is fair!";
        answer = "draw";
    }else if (playerChoice === "rock" && computerChoice === "paper") {
        msg = "You Loose! Paper wraps rock.";
        answer  = "computer";
    } else if (playerChoice === "rock" && computerChoice === "scissors"){
        msg = "You Win! Rock smashes scissors.";
        answer =  "player";
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        msg = "You win! Paper wraps rock.";
        answer =  "player";
    } else if (playerChoice === "paper" && computerChoice === "scissors"){
        msg = "You Loose! Scissors cut paper.";
        answer = "computer";
    } else if (playerChoice === "scissors" && computerChoice === "paper"){
        msg = "You Win! Scissors cut paper.";
        answer =  "player";
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        msg = "You Loose! Rock smashes scissors.";
        answer =  "computer";
    } 
    displayResult(computerChoice, msg);
    game(answer);
    

}


function game(answer) {
    if (answer.toLowerCase() === "player") {
        playerScore += 1;
    } else if (answer.toLowerCase() === "computer") {
        computerScore += 1;
    } 
    setScore();
    if (playerScore === 5 || computerScore === 5){
        let won;
        if (playerScore === 5) {
            won = true;
            msg  = (`Congragulations! You won the game.`);
        } else if (computerScore === 5){
            won = false;
            msg  = (`Sorry! You lost the game.`);
        }
 
        computerScore = 0;
        playerScore = 0;
        displayResult("", msg, won);
       
    }
    
}
 //displays result on the screen.       
function displayResult(computerChoice="", msg="", won) {
    const computerDiv = document.querySelector("#computer-choice");
    const resultDiv = document.querySelector("#result");
   
    if (computerChoice) {
        resultDiv.style.color = "black";
        computerDiv.style.textTransform = "capitalize";
        computerDiv.textContent = `Computer Choose: ${computerChoice}`;
    }
    else {       
        if(won) {
            resultDiv.style.color = "green";
    
        } else {
            resultDiv.style.color = "red";
    
        }
        computerDiv.textContent = "";
    }
    resultDiv.textContent = msg;
    
}
//sets the score on the screen
function setScore() {
    const yourScore = document.querySelector("#your-score");
    yourScore.textContent = `Your Score ${playerScore}`;

    const compScore = document.querySelector("#computer-score");
    compScore.textContent = `Computer Score ${computerScore}`;

    
}


const rock = document.querySelector("#rock");
rock.addEventListener('click', () => playRound("rock", computerPlay));


const paper = document.querySelector("#paper");
paper.addEventListener('click', () => playRound("paper", computerPlay));


const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => playRound("scissors", computerPlay));

const reloadBtn = document.querySelector("#reload");
reloadBtn.addEventListener(
    'click', () => location.reload()
);
