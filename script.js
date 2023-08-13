// Keep track of score
let userScore = 0;
let computerScore = 0;

// Ask the prompt for 5 times
for (i = 1; i <= 5; i++) {
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

  // If user chosen Paper
  if (userInput === "paper" && computerInput === "rock") {
    userScore += 1;
    console.log("+1 for you! Computer has chosen Rock 🪨");
  } else if (userInput === "paper" && computerInput === "paper") {
    console.log("It's a tie! Both of you chosen Paper 📄");
  } else if (userInput === "paper" && computerInput === "scissor") {
    computerScore += 1;
    console.log("+1 for computer! It has chosen Scissor ✂️");
  }

  // If user chosen Scissor

  if (userInput === "scissor" && computerInput === "rock") {
    computerScore += 1;
    console.log("+1 for computer! It has chosen Rock 🪨");
  } else if (userInput === "scissor" && computerInput === "paper") {
    userScore += 1;
    console.log("+1 for you! Computer has chosen Paper 📄");
  } else if (userInput === "scissor" && computerInput === "scissor") {
    console.log("It's a tie! Both of you chosen Rock 📄");
  }
}
// Then declare the winner and reset the game

if (userScore > computerScore) {
  alert(
    "🎉 You've won! Your score: " +
      userScore +
      " " +
      "Computer score: " +
      computerScore
  );
} else if (userScore === computerScore) {
  alert(
    "😅 It's a tie! Your score: " +
      userScore +
      " " +
      "Computer score: " +
      computerScore
  );
} else {
  alert(
    "😢 Computer won! Your score: " +
      userScore +
      " " +
      "Computer score: " +
      computerScore
  );
}

//Clears console
console.clear();
