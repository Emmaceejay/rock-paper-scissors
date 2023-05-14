
let playerSelection = "";
let computerSelection = "";
let computerWins = 0;
let playerWins = 0;
let playerScoreSum = playerWins;



//selecting all required HTML elements
const buttons = document.querySelectorAll('button');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const champion = document.querySelector('.champion');
const startPage = document.querySelector('.container');
const startButton = document.querySelector('#start-button');

//computer input
function computerPick(){
    const randomPick = ['rock', 'paper', 'scissors'];
    const randomRange = Math.floor(Math.random() * randomPick.length)
    return randomPick[randomRange];
}

startButton.addEventListener('click', function(){
    startPage.style.opacity = 0;
    startPage.style.transform = 'scale(0)';
    startPage.style.display = 'none';
})

//player input
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        let player = button.id;
        playerSelection = player;
        playRound(playerSelection, computerSelection);
    } )
}
);





function playRound(playerSelection, computerSelection){
    computerSelection = computerPick();
    // console.log(`from gamplay: ${computerSelection}`)

    if(computerSelection == playerSelection){
        console.log('tie')
    }else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        console.log(`computer win : score: ${computerWins=++computerWins}`);
    }else if (computerSelection == 'rock' && playerSelection == 'paper'){
        console.log(`you win : score: ${playerScoreSum= ++playerWins}`);
    }

    if(computerSelection == 'paper' && playerSelection == 'scissors'){
        console.log(`you win : score: ${playerScoreSum= ++playerWins}`);
    }else if(computerSelection == 'paper' && playerSelection == 'rock'){
        console.log(`computer win : score: ${computerWins=++computerWins}`);
    }

    if(computerSelection == 'scissors' && playerSelection == 'paper'){
        console.log(`computer win : score: ${computerWins=++computerWins}`);
    }else if(computerSelection == 'scissors' && playerSelection == 'rock'){
        console.log(`you win : score: ${playerScoreSum= ++playerWins}`);
    }
    
    winner(playerWins, computerWins);
   
    computerScore.textContent= `Computer score: ${computerWins}`;
    playerScore.textContent = `Player score: ${playerWins}`;
    playerChoice.textContent = `Player choice: ${(playerSelection).toUpperCase()}`;
    computerChoice.textContent = `Computer choice: ${(computerSelection).toUpperCase()}`;
    // console.log('computer wins: ' + computerWins);
    // console.log('player wins: '+ playerWins)

}




function winner(a, b){
    if (a ==3 || b == 3){
        let anounce = "";
        if(a > b){
            console.log(anounce = "you win round");
            console.log(playerWins + ":" + computerWins)
        }else if(b > a){
            console.log(anounce = "computer win round");
            console.log(computerWins + ":" + playerWins)
        }   
        return anounce;
    }
   
}


