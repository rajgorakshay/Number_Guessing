let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = () => {
    let newRandomTargetNum = Math.floor(Math.random() * 10);
    return newRandomTargetNum;
  }
  
  const compareGuesses = (humanGuess, computerGuess,targetNum) => {
    
    computerGuess = Math.floor(Math.random() * 10);
  
    if((Math.abs(targetNum - humanGuess)) < (Math.abs(targetNum - computerGuess))) {
      return true;
    } 
    if ((Math.abs(targetNum - computerGuess)) < (Math.abs(targetNum - humanGuess))) {
      return false;
    }
    if(humanGuess === computerGuess){
        return true;
    }

  }
  
  const updateScore = winner => {
    if(winner === 'human'){
    humanScore = humanScore +1;
    return humanScore;
  } 
  if (winner === 'computer'){
    computerScore = computerScore +1;
    return computerScore;
  }
  
  } 
  
  const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1;
  }
  
  
  
  updateScore('human');
  console.log(humanScore); // To confirm that this value increased by 1
  updateScore('computer');
  console.log(computerScore); // To confirm that this value increased by 1