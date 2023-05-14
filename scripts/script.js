
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
const roundWinner = document.querySelector('.round-winner');
const startPage = document.querySelector('.container');
const startButton = document.querySelector('#start-button');
const gameContainer = document.querySelector('#game-container');
const endContainer = document.querySelector('.end-container');
const result = document.querySelector('.result');
const playerImage = document.querySelector('#player-image')
const compImage = document.querySelector('comp-image')

//computer input
function computerPick(){
    const randomPick = ['rock', 'paper', 'scissors'];
    const randomRange = Math.floor(Math.random() * randomPick.length)
    return randomPick[randomRange];
}

//function to toggle computerimage to visible
function compWinImage(){
    compImage.classList.toggle('visible');
}

//function to toggle playerimage to visible
function playerWinImage(){
    playerImage.classList.toggle('visible');
}

//fumction to hide gamecontainer
function hideGameContainer (){
    gameContainer.style.opacity = 0;
    gameContainer.style.transform = 'scale(0)';
    gameContainer.style.display = "none";
}



//funtion to hide startpage and end container and reveal main game container
startButton.addEventListener('click', function(){
    startPage.style.opacity = 0;
    startPage.style.transform = 'scale(0)';
    startPage.style.display = 'none';
//end container hide
    endContainer.style.opacity = 0;
    startPage.style.transform = 'scale(0)';
    startButton,style.display = 'none';

})

//function to reveal end container
function revealEndContainer(){
    endContainer.style.opacity = 100;
    // endContainer.style.transform ='scaley(5)'
    endContainer.style.display = 'flex';
}

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
   
    computerScore.textContent= ` ${computerWins}`;
    playerScore.textContent = ` ${playerWins}`;
    playerChoice.textContent = `Player choice: ${(playerSelection).toUpperCase()}`;
    computerChoice.textContent = `Computer choice: ${(computerSelection).toUpperCase()}`;
    // console.log('computer wins: ' + computerWins);
    // console.log('player wins: '+ playerWins)

}




function winner(a, b){
    if (a ==3 || b == 3){
        let anounce = "";
        if(a > b){
            hideGameContainer ();
            revealEndContainer();
            console.log(anounce = "you win round");
            roundWinner.textContent = `You won this round`;
            console.log(playerWins + ":" + computerWins)
            result.textContent = ` ${playerWins} : ${computerWins} `;
            // playerImage.classList.toggle('visible');
            playerWinImage()
            
        }else if(b > a){
            hideGameContainer ();
            revealEndContainer();
            console.log(anounce = "computer win round");
            roundWinner.textContent = `Computer won this round`;
            console.log(computerWins + ":" + playerWins)
            result.textContent = ` ${computerWins} : ${playerWins} `;
            // compImage.classList.toggle('visible');
            compWinImage()
            
        }   
        return anounce;
    }
   
}


