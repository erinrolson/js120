/*
Rewrite the original RPS game from lesson 1 to use constructors and prototypes,
not factory functions.

1) Write a class with the same name as the original constructor function.
2) Move the constructor function into the class and rename it as constructor.
3) Move all the prototype functions into the class.

*/
const readline = require("readline-sync");

class Player {
  constructor() {
    this.move = null;
  }
}

class Computer extends Player {
  constructor() {
    super();
  }
  
  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    this.move = choices[randomIndex];
  }
}

class Human extends Player {
  constructor() {
    super();
  }
  
  choose() {
    let choice;
    
    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      choice = readline.question();
      if (['rock', 'paper', 'scissors'].includes(choice)) break;
      console.log('Please enter a valid choice.');
    }

    this.move = choice;
  }
}

class RPSGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }
  
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  }
  
  displayGoodbyeMessage() {
    console.log('Thank you for playing Rock, Paper, Scissors. Goodbye!');
  }
  
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
  }
  
  playAgain() {
  console.log('Would you like to play again? (y/n)');
  let answer = readline.question();
  return answer.toLowerCase() === 'y';
  }
  
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
}

let newGame = new RPSGame();
newGame.play();