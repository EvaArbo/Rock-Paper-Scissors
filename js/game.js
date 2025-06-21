// Get references to all the DOM elements
const countdown = document.getElementById("countdown");       
const confuseThem = document.getElementById("confuse-them"); 
const playBtn = document.getElementById("play-btn");         
const stopBtn = document.getElementById("stop-btn");         
const btnRock = document.getElementById("btn-rock");         
const btnPaper = document.getElementById("btn-paper");       
const btnScissors = document.getElementById("btn-scissors"); 
const playSection = document.getElementById("make-choice");  
const resultMessageEl = document.getElementById("result-message");  
const playerScoreEl = document.getElementById("player-score");    
const computerScoreEl = document.getElementById("computer-score");  
const resultsBody = document.getElementById('results-body');

// Game variables
let countDownValue = 15;           
let confussionInterval = null;     
let countDownInterval = null;      
let playerScore = 0;               
let computerScore = 0;
let roundNumber = 0;

// Event listeners
playBtn.addEventListener("click", () => {
    startCountDown();
    confussionStart();
    playSection.style.display = "block";
    resultMessageEl.innerText = ""; 
});
stopBtn.addEventListener("click", stopGame);
btnRock.addEventListener("click", () => handleChoice(0, "Rock"));
btnPaper.addEventListener("click", () => handleChoice(1, "Paper"));
btnScissors.addEventListener("click", () => handleChoice(2, "Scissors"));

function handleChoice(playerChoice, choiceName) {
    stopGame();
    const computerChoice = Math.floor(Math.random() * 3); 
    let outcome;

    if (playerChoice === computerChoice) {
        playerScore++;
        outcome = "Player Wins 🎉";
    } else {
        computerScore++;
        outcome = "Computer Wins ❌";
    }

    roundNumber++;
    addResultRow(roundNumber, choiceName, outcome); // Append to table
    resultMessageEl.innerText = outcome;
    updateScoreboard();
}

// Stops game and resets countdown
function stopGame() {
    clearInterval(countDownInterval);    
    clearInterval(confussionInterval);    
    countdown.innerText = 15;            
    countDownValue = 15;                 
    playSection.style.display = "none";  
}

// Start the countdown timer
function startCountDown() {
    countDownValue = 15;
    countDownInterval = setInterval(() => {
        if (countDownValue <= 0) {
            clearInterval(countDownInterval); 
            countdown.innerText = 15;
            stopGame();
        } else {
            countdown.innerText = countDownValue - 1;
            countDownValue--;
        }
    }, 1000); 
}

// Confusion animation
function confussionStart() {
    let arr = [
        '<i class="fa-solid fa-hand-back-fist" style="font-size: 100px;"></i>',
        '<i class="fa-solid fa-hand" style="font-size: 100px;"></i>',
        '<i class="fa-solid fa-hand-scissors" style="font-size: 100px;"></i>'
    ];
    confussionInterval = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 3); 
        confuseThem.innerHTML = arr[randomNumber];          
    }, 500); 
}

// Append new row to results table
function addResultRow(round, playerMove, outcome) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${round}</td>
        <td>${playerMove}</td>
        <td>${outcome}</td>
    `;
    resultsBody.appendChild(newRow);
}

// Updates scoreboard
function updateScoreboard() {
    playerScoreEl.innerText = playerScore;
    computerScoreEl.innerText = computerScore;
}
