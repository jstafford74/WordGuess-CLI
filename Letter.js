// This constructor, 'Letter', is dependent on the user's guess and should be able to either display:
// An underlying character, or
// a blank placeholder (such as an underscore).

// The constructor should define 
  // * A string value to store the underlying character for the letter

  // * A boolean value that stores whether that letter has been guessed yet

  // * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  // * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

  /**
   * This is a class clled 'Letter'
   * @param {string} letStore stores value of correct letters for the word
   * @param {boolean} guessed stores value of guess
   */
  class Letter {
    constructor(letStore) {
      this.letStore = letStore;
      this.guessed = false;
    }
  /**
   * This is a function
   * @param {string} guess checks the guess against letters in the word and previous guesses
   * @param {boolean} guessed
   */
    checkLet(guess) {
      if (this.letStore === guess) {
        this.guessed = true;
      }
    }

    /**
     * This is a function that returns the letter or the underscore placeholder 
     * @param {boolean} guessed
     * @param {string} letStore
     */

    toString() {
      if (this.guessed) {
        return this.letStore;
      } else {
        return "_";
      }
    }
  }
  
  module.exports = Letter;
  