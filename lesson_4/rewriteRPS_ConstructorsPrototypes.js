/*
Rewrite the original RPS game from lesson 1 to use constructors and prototypes,
not factory functions.

1) Write a constructor function for each factory function.
2) Move the initialization code from the factory function into the constructor.
3) Move all the other methods from the factory function into the constructor's prototype.
4) Replace the factory function invocations with constructor calls.

*/
const readline = require("readline-sync");

function Player() {
  this.move = null;
}

function Computer() {
  Player.call(this); // gives this it's own move property
}

// reassign the create computer function prototype to create player function prototype
Computer.prototype = Object.create(Player.prototype);

// reassign Computer constructor prop to Computer function 
Computer.prototype.constructor = Computer;

// add method to prototype
Computer.prototype.choose = function() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    this.move = choices[randomIndex];
};

function Human() {
  Player.call(this); // gives this it's own move property
};

// set prototype property to an empty obj that inherits from Human function prototype 
Human.prototype = Object.create(Player.prototype);
Human.constructor = Human;

Human.prototype.choose = function() {
    let choice;
    
    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      choice = readline.question();
      if (['rock', 'paper', 'scissors'].includes(choice)) break;
      console.log('Please enter a valid choice.');
    }

    this.move = choice;
};

function RPSGame() {
  // initialize the state of an object in it's constructor
  this.human = new Human();
  this.computer = new Computer();
}

// methods go on the function prototype
RPSGame.prototype = {
  displayWelcomeMessage() {
  console.log('Welcome to Rock, Paper, Scissors!');
},

displayGoodbyeMessage() {
  console.log('Thank you for playing Rock, Paper, Scissors. Goodbye!');
},

displayWinner() {
  let humanMove = this.human.move;
  let computerMove = this.computer.move;

  console.log(`You chose: ${this.human.move}`);
  console.log(`Computer chose: ${this.computer.move}`);

  if ((humanMove === 'rock' && computerMove === 'scissors') ||
    (humanMove === 'paper' && computerMove === 'rock') ||
    (humanMove === 'scissors' && computerMove === 'paper')) {
    console.log('You win!');
  } else if ((humanMove === 'rock' && computerMove === 'paper') ||
           (humanMove === 'paper' && computerMove === 'scissors') ||
           (humanMove === 'scissors' && computerMove === 'rock')) {
    console.log('Computer wins!');
  } else {
    console.log("It's a tie");
  }

},

playAgain() {
  console.log('Would you like to play again? (y/n)');
  let answer = readline.question();
  return answer.toLowerCase() === 'y';
},


play() {
  this.displayWelcomeMessage();
  while (true) {
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    if (!this.playAgain()) break;
  }
  this.displayGoodbyeMessage();
}
};

// ensure prototype has constructor property back to constructor
RPSGame.prototype.constructor = RPSGame;

let newGame = new RPSGame();
newGame.play();