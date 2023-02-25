("use stict");

let score = 20;
let highscore = 0;

function colorChange(color) {
  document.querySelector(".game-panel").style.backgroundColor = color;
  document.querySelector(".btn").style.color = color;
  document.querySelector(".new-game").style.color = color;
  document.querySelector("input").style.color = color;
}
function changeText(theClass, newText) {
  document.querySelector(theClass).textContent = newText;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let number = document.querySelector(".number").textContent;
document.querySelector(".confirm").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score != 0) {
    if (!guess) {
      changeText(".message", "No number selected");
    } else if (guess === secretNumber) {
      number = changeText(".number", secretNumber);
      changeText(".message", "Good Job");
      colorChange("#12b886");
      if (score > highscore) {
        changeText(".highscore", score);
      }
    } else if (guess > secretNumber) {
      changeText(".message", "Number is too high!");
      score--;
      changeText(".score", score);
    } else if (guess < secretNumber) {
      changeText(".message", "Number is too low!");
      score--;
      changeText(".score", score);
    }
  } else {
    number = changeText(".number", secretNumber);
    changeText(".message", "Oops! You lost the game");
    colorChange("#fa5252");
    changeText(".score", score);
  }
});

document.querySelector(".new-game").addEventListener("click", function () {
  score = 20;
  changeText(".score", score);
  colorChange("#7048e8");
  guess = changeText(".guess", " ");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  changeText(".message", "Start guessing...");
  number = changeText(".number", "?");
});
