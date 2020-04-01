/* ********************************************************************* */
​
/* PART 4: GUESS WORD */
​
​
/* ALPER COMMENTS */
​
var words = ['ironman', 'superman', 'batman'];
​
/* Part 1: Create an Object for everything */
// You can create an object for all functions and properties like Class 
// or you can do it without object just defining and creating arrays, variables and functions!
​
// 1 - Create an object
var game = {
  //Create wrong "guesses" as an empty array
  guessed: [],
  // Define your initial Guesses Remain
  left: 12,
​
  // 1.1 - Create a function to start the game
    // Define variables for manupulating DOM and select random word inside the array
  start: function() {
    // 1.1.1 - Define a boolean for completing game or not
    this.complete = false;
    // 1.1.2 - Select random word inside the array
    this.word = words[Math.floor(Math.random() * words.length)];
    // 1.1.3 - Select the "#right" and define as a variable
    this.$right = document.getElementById('right');
    // 1.1.4 - Select the "#wrong" and define as a variable
    this.$wrong = document.getElementById('wrong');
    // 1.1.5 - Select the "#remain" and define as a variable
    this.$remain = document.getElementById('remain');
    // 1.1.6 - Create '_' and use "repeat" method to create a line inside the "#right"
    this.$right.innerHTML = '_'.repeat(this.word.length);
  },
​
  // 2 - Create a function for "guess"
  guess: function(letter) {
    // 2.1 - write a condition "If the reamining guess is bigger then 0 and the game is not completed"
    if (this.left > 0 && this.complete != true) {
      // 2.2 - write a condition "If the "indexOf" letter of the word bigger than -1 and guessed "indexOf" letter bigger than -1
      if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
        // 2.2.1- Call the "right" function with parameter "letter"
        this.right(letter);
      } else {
        // 2.2.2- Call the "wrong" function with parameter "letter"
        this.wrong(letter);
      }
    }
  },
​
  // 3 - Create a function for "right" Guess
  right: function(letter) {
    // 3.1 - Create a loop with the selected word length
    for(var i = 0; i < this.word.length; i++) {
      // 3.1.1 - If the word index is as same as typed letter
      if (this.word[i] == letter) {
        // 3.1.1.1 - Manupulate the "right" with "split" method and store into a variable word
        var word = this.$right.innerHTML.split('');
        // 3.1.1.2 - the word index is equal to typed letter
        word[i] = letter;
        // 3.1.1.3 - "join" the letter into "#right"
        this.$right.innerHTML = word.join('');
      }
    }
​
    // 3.2 - If there is no underscore and fulled with letter
    if (this.$right.innerHTML.indexOf('_') < 0) {
      // 3.3 - Alert "you win"
      alert('you win!');
      // 3.4 - Change the status as a completed "boolean"
      this.complete = true;
    }
  },
​
  // 4- Create a function for "wrong" Guess
  wrong: function(letter) {
    // 4.1 - Push the letter to wrong "guesses" empty array 
    this.guessed.push(letter);
    // 4.2 - Change the "#wrong" and add space between letters
    this.$wrong.innerHTML += ' ' + letter;
    // 4.3 - Decrease remaing guess number
    this.left--;
​
    // 4.4 - Show new remaining guess  number on the screen
    this.$remain.innerHTML = this.left;
​
    // 4.5 - If the remaining guess number is less than 1
    if (this.left < 1) {
      // 4.5.1 - Alert "you lose"
      alert('you lose! '+ this.word);
      // 4.5.2- Change the status as a completed "boolean"
      this.complete = true;
    }
  }
};
​
// 5- Start the game
game.start();
​
// 6- keyup function part
document.onkeyup = function(event) {
  console.log(event.keyCode);
  /* var letter = String.fromCharCode(event.keyCode).toLowerCase(); */
  let letter = event.key.toLowerCase();
  console.log(letter);
  game.guess(letter);
};
