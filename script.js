const startBtn = document.getElementById("start-button");
const result = document.getElementById("result");
const input = document.getElementById("input");
const guess = document.getElementById("guess");
const checkBtn = document.getElementById("btn-check");
const score = document.getElementById("score");
let answer = 0;
var countScore = 0;

startBtn.addEventListener("click", () => {
  startGame();
});

checkBtn.addEventListener("click", () => {
  checkGame();
});

function checkGame() {
  let inputValue = input.value;
  console.log("Hi");
  if (inputValue == null) {
    alert("please input a value to check");
    return;
  }
  if (inputValue == answer) {
    result.innerHTML = answer;
    guess.innerHTML = "You Won...";
    countScore += 10;
    score.innerHTML = countScore;
    document.body.style.backgroundColor = "green";
    input.style.backgroundColor = "green";
    checkBtn.style.color = "green";
    startBtn.style.color = "green";
    answer = null;
  } else if (inputValue > answer) {
    guess.innerHTML = "A little lower...";
    console.log("aliitle lower");
  } else if (inputValue < answer) {
    guess.innerHTML = "A little higher...";
  }
}

function startGame() {
  answer = Math.floor(Math.random() * 10) + 1;
  document.body.style.backgroundColor = "rebeccapurple";
  input.style.backgroundColor = "rebeccapurple";
  checkBtn.style.color = "rebeccapurple";
  startBtn.style.color = "rebeccapurple";
  input.value = null;
  guess.innerHTML = "Start Guessing...";
  result.innerHTML = '<i class="fa-solid fa-question"></i>';
  // alert(answer);
}
