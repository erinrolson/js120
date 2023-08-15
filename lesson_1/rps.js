/*
Game flow:
1) user makes a choice (rock, paper, scissors)
2) computer makes a choice (rock, paper, scissors)
3) display the winner (compare user and computer choices)

Classical Approach to coding in OOP style:
1) write a textual description of the problem/exercise
2) extract significant nouns/verbs from the written description
3) organize and associate the verbs w/ nouns
  - nouns represent object types
  - verbs represent methods

Step 1: Write a textual description of RPS game
What is RPS?
  - A game where two players choose between three moves: rock, paper, scissors.
    The players then compare objects to determine who has won the round.
  - Comparison rules:
    - Rock beats scissors
    - paper beats rock
    - scissors beats paper
    - two same objects (moves) results in tie

Step 2: Extract significant nouns and verbs from description
  - Nouns:
    - player
    - move (rock, paper, scissors)
    - rule
  - Verbs:
    - choosing object (move)
    - comparing object (determine winner)

Step 3: Organize and associate the verbs with the nouns
  - Nouns (organized into objects)
    - Player
      - choose object (method of player object)
    - Move
    - Rule

  - Verbs (organized into methods/functions)
    - compare ???
*/
const readline = require("readline-sync");

function createPlayer() {
  return {
    move : null,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {

    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Please enter a valid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

const RPSGame = {
  human : createHuman(),
  computer : createComputer(),

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
  },
};

RPSGame.play();