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

console.log(randomOptionPicker());
