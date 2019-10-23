// The file containing the logic for the course of the game, which depends on `Word.js` and 'Letter.js'

// * Randomly selects a word and uses the `Word` constructor to store it

// * Prompts the user for each guess and keeps track of the user's remaining guesses

const Word = require("./Word");
const inquirer = require("inquirer");
let guessed = [];
let guessesLeft = 10;
let letStore = "";
const words = [
  "milieu",
  "discomfit",
  "crepuscular",
  "surfeit",
  "imbue",
  "lissome",
  "privation",
  "sate",
  "culpable",
  "portent",
  "transgress",
  "ebullient",
  "hauteur",
  "withhold",
  "supple",
  "comeuppance"

];

/**
 * This is a function that returns a promise resolving the user's guess and the functions created to measure accuracy
 */
const init = () => {
  return new Promise((resolve, reject) => {
    targetWord = words[Math.floor(Math.random() * words.length)];
    guessed = [];
    guessesLeft = 10;
    let newTarget = new Word(targetWord);
    console.log("\nNew Word: \n");
    newTarget.display();
    console.log("\n");
    resolve(newTarget);
  });
};

/**
 * This is an async await function that lets inquirer return the input and run methods
 */
const done = async () => {
  let res = await inquirer.prompt([
    {
      type: "confirm",
      name: "again",
      message: "Would you like to play again?"
    }
  ]);

  return res;
};

const playAgain = async () => {
  let { again } = await done();
  if (again) {
    letStore = await init();
    prompt();
  } else {
    return;
  }
};

const prompt = async () => {
  let { guess } = await inquirer.prompt([
    {
      type: "input",
      message: "Guess a letter!",
      name: "guess",
      validate: input => /^[a-zA-Z]$/.test(input)
    }
  ]);
  guessesLeft--;
  guess = guess.toLowerCase();
  if (/^[a-z]$/.test(guess)) {
    if (!guessed.includes(guess)) {
      guessed.push(guess);
      letStore.guess(guess);
      letStore.display();
      if (letStore.finished()) {
        console.log("\nYou Win! \n");
        playAgain();
      } else {
        if (guessesLeft) {
          console.log(`
  Guesses left: ${guessesLeft}
            `);
          return prompt();
        } else {
          console.log(`
  You're all out of guesses!
  `);
          playAgain();
        }
      }
    } else {
      console.log(`You have already guessed ${guess}!`);
      return prompt();
    }
  } else {
    console.log(`${guess} is not a valid guess! Enter only one character a-z.`);
  }
};

(async () => {
  letStore = await init();
  prompt();
})();

