//number guessing game , set an answer and prompt the user to guess

let answer = 444;
//answer

let stillPlaying = true;
//is the user still playing

//the whole game
function turn() {
  let guess = prompt("Guess a number");

  if (answer < guess) {
    alert("Your guess was too high");
  } else if (answer > guess) {
    alert("Your guess was too low");
  } else {
    alert("Your guess was correct - congrats");
    stillPlaying = false;
  }
}

while (stillPlaying) {
  turn();
}
