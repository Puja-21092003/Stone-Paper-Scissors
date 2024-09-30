 let userScore=0;
 let compSore =0;
 const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

 const genCompChoice = () => {
    const  options = ["stone","paper","scissors"];
  const randIdx= Math.floor(Math.random() * 3);
  return options[randIdx];
 }
const drawGame = () =>
{
   
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor = "#801b31";
};
 const  showWinner = (userWin , userChoice , compChoice) =>
 {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`you win! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
      compSore++;
        compScorePara.innerText = compSore;
        msg.innerText=`you lost. ${compChoice}  beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 };
 const playGame = (userChoice) =>
 {
const compChoice = genCompChoice();
if (userChoice === compChoice)
{
  drawGame();
}
else{
   let userWin = true;
    if(userChoice === "stone")
    {
      userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper")
    {
        userWin = compChoice === "scissors" ? false : true;
    }
    else{
        userWin = compChoice === "stone" ? false : true;  
    }
    showWinner(userWin, userChoice,compChoice);
}

 };
 choices.forEach((choice) =>
 {
  choice.addEventListener("click" , () =>
  {
    const userchoice = choice.getAttribute("id");
 playGame(userchoice);
  });
 });