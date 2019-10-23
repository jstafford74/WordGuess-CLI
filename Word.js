// This constructor, 'Word', depends on the Letter constructor. 
// 'Word' is used to create an object representing the current word the user is attempting to guess.
// It defines:

// * An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

const Letter = require("./Letter");
const chalk = require("chalk");

/**
 * This is a class, 'Word'
 * @param {string} letStore 
 */
class Word {
  constructor(letStore) {
    this.arr = letStore.split("").map(letter => new Letter(letter));
  }

  /**
   * This is a function
   * @param {string} built place for the letters of the word to be stored in display
   * @return built
   */
  display() {
    let built = "";
    this.arr.forEach(letter => (built += `${letter.toString()} `));
    console.log(built);
  }
/**
 * This is a function that validates the user's guess
 * @param {string} userGuess user's input
 * @param {boolean} correct 
 */
  guess(userGuess) {
    let correct = false;
    this.arr.forEach(letter => {
      letter.checkLet(userGuess);
      if (letter.letStore === userGuess && letter.guessed) {
        correct = true;
      }
    });

    if (correct) {
      console.log(chalk.green("\nCorrect!\n"));
    } else {
      console.log(chalk.red("\nIncorrect!\n"));
    }
  }

  /**
   * This is a function to notify the user the game has finished
   * @param {boolean} finished measures the guesses against the letters in the word
   */
  finished() {
    let finished = true;
    this.arr.forEach(letter => {
      if (!letter.guessed) {
        finished = false;
      }
    });

    return finished;
  }
}

module.exports = Word;
