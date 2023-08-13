// Ask user input

let userInput = prompt(
  "Pick something: Rock, Paper or Scissors: "
).toLowerCase();

// Generate random option

function randomOptionPicker() {
  const optionsForComputer = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * optionsForComputer.length);
  let randomOption = optionsForComputer[randomIndex];

  return randomOption;
}

let computerInput = randomOptionPicker();

// Keep track of score

let userScore = 0;
let computerScore = 0;

//Gameplay
// If user chosen Rock

if (userInput === "rock" && computerInput === "rock") {
  console.log("It's a tie! Both of you chosen Rock 🪨");
} else if (userInput === "rock" && computerInput === "paper") {
  computerScore += 1;
  console.log("+1 for computer! It has chosen Paper 📄");
} else if (userInput === "rock" && computerInput === "scissor") {
  userScore += 1;
  console.log("+1 for you! Computer has chosen Scissor ✂️");
}

console.log(userScore, computerScore);
