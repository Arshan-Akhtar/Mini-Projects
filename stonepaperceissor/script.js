let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ( )=>{
   const options = ["scissors" , "stone" , "paper"];
  const randIndx= Math.floor( Math.random()*3);
  return options[randIndx];
}
const drawGame =()=>{
 
 msg.innerText = "GAME WAS DRAW. PLAY AGAIN";
 msg.style.backgroundColor = " #081b31";
}
const showWinner = (userWin , userChoice, compChoice)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats  ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore ++;
        compScorePara.innerText = compScore; 
        msg.innerText = `You loose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) =>{
 console.log("user choice = " ,userChoice);
 // Generate comp choice
 const compChoice = genCompChoice();
 console.log("comp choice = " ,compChoice);

if (userChoice === compChoice){
    // draw game 
    drawGame();
}
else{
      let userWin = true;
      if(userChoice === "stone"){
        // scissors,paper
        userWin = compChoice === "paper" ? false : true;
      }
      else if (userChoice  === "paper"){
        // stone,scissors
        userWin = compChoice === "scissor" ? false: true;
      }
      else{
        // stone ,paper
        userWin = compChoice === "stone" ? false : true;
      }
      showWinner(userWin , userChoice,compChoice);
}
}
choices.forEach((choice)=>{
choice.addEventListener("click" , () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});