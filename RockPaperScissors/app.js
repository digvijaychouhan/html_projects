let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = "It's a Draw, Try again";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}. You win!`;
}

function lose(computerChoice, userChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;

  result_p.innerHTML = `${convertToWord(computerChoice)} ${smallUserWord} beats ${convertToWord(userChoice)} ${smallCompWord}. You Lose!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rr':
    case 'pp':
    case 'ss':
              draw(userScore, computerScore);
              break;
    case 'rs':
    case 'pr':
    case 'sp':
              win(userChoice, computerChoice);
              break;

    case 'sr':
    case 'rp':
    case 'ps':
              lose(computerChoice, userChoice);
              break;
  }
}

function main() {
  rock_div.addEventListener('click', function (){
    game("r");
  })

  paper_div.addEventListener('click', function (){
    game("p");
  })

  scissor_div.addEventListener('click', function (){
    game("s");
  })
}

main()
