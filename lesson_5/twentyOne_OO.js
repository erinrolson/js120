/*
Twenty One is a card game with a player and a dealer. Each is initially dealt
a hand of 2 cards from a 52 card deck. The dealer must show one card to the player.
The object of the game is to get as close to 21 as possible without busting
(going over). The player always takes the first turn and can choose to either stay
(takes no new cards) or hit (is given anothercard). If The player goes over 21
they bust and the dealer wins. Once it is the dealers turn, they must hit until
their hand is at least a point value of 17. 
  
Organize:
  - Game
    - welcome 
    - start
    - display results
    - goodbye
    
  - Deck
  - Card
    
  - Participant (superclass of Player, Dealer)
    - hit
    - stay
    - bust
    - Score (n, state)
    - display hand (include point total)
    
  
  - Player (extends Participant)
    - cash (state, start at 5)
    - display computer hand for player (1 card only)

  
  - Dealer (extends Participant)
    - deal (make a deck object for the dealer to deal from)
*/

const readline = require("readline-sync");
const shuffle = require("shuffle-array");

class Card {
  static FACE_CARDS = ['Jack', 'Queen', 'King'];
  static RANK = [2, 3, 4, 5, 6, 7, 8, 9, 10, ...Card.FACE_CARDS, 'Ace'];
  static SUIT = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    //this.pointValue = this.getPoints(); // <- cards do not have point value inherintly. Game rules handle this (if a card even has a value is up to gameplay rules)
  }
  
  // maybe need a isFaceCard function?
  isFaceCard() {
    return Card.FACE_CARDS.includes(this.rank);
  }
  
  isAce() {
    return this.rank === 'Ace';
  }
  
  getRank() {
    return this.rank;
  }
  
  toString() {
    return `${this.rank} of ${this.suit}`;
  }
  
  // getPoints() { // <-- using a card we can get points but this isn't inherent to a card, its based on the game. 
  //   if ( Card.FACE_CARDS.includes(this.rank) ) return 10;
  //   if ( this.rank === 'Ace' ) return [11, 1];
  //   return this.rank; 
  // }
}

class Deck {
  constructor() {
    
    this.cards = [];
    
    Card.RANK.forEach(rank => {
      Card.SUIT.forEach(suit => {
        this.cards.push(new Card(rank, suit));
      });
    });
    
    this.shuffleCards();
  }
  
  shuffleCards() {
    shuffle(this.cards);
  }
  
  // pickCard() { // <-- this seems more like gameplay... 
  //   return this.cards.pop();
  // }
}

/*
There isn't really any sort of fundamental state of a participant that
players or the dealer needs to inherit from given what is in the class at this
point. 

class Participant {
  constructor() {
    // bust (state)
    // score -> current value of hand?
    //this.score = // participant hand total
    this.hand = [];
  }
  
  hit() { // <-- this is gameplay
  // give participant a card from deck
  }

  stay() { // <-- this is gameplay
  // participant doesn't want a card...
  }
  
  isBusted() { // <-- this is gameplay
    
  }
  
  calculateHandValue() { // <-- this is also gameplay? or at least uses elements of the game to determine
    let handTotal = 0;
  
    // do some general adding of cards
    this.hand.forEach( card => {
      if (card.rank === 'A') handTotal += Card.ACE_MAX ;
      else handTotal += card.pointValue;
    });
    
    // account for Aces
    this.hand.filter( card => card.rank === 'A').forEach( ace => { 
      if (handTotal > TwentyOneGame.WINNING_HAND_VALUE) {
        handTotal -= 10;
      }
    });
    
    return handTotal;
  }
  
  displayHand() {
    console.log(`${this.constructor.name} Hand: ${this.hand}`);
  }
  
}
*/
// creating a mixin object to represent a player/dealer hand
// I think a Hand class is just as valid, but using a mixin pattern to get
// more comfortable with it. 
let Hand = {
  
  resetHand() {
    this.hand = [];
  },
  
  addCardToHand(card) {
    this.hand.push(card);
  },
  
  // This could be a bit different and use additional functions to help formating
  // the display of a hand in addition to a message
  displayHand() { 
    console.log(`${this.constructor.name} Hand: ${this.hand}`);
  },
};

class Player {
  static STARTUP_FUNDS = 5;
  
  constructor() {
    this.cash = Player.STARTUP_FUNDS; 
  }
  
  displayCashTotal() {
    console.log(`${this.constructor.name} has $${this.cash}`);
  }
}

Object.assign(Player.prototype, Hand);

class Dealer {
  
  displayTopCard() {
    console.log(`Dealer's top card: ${this.hand[0]}`);
  }
  
  reveal() { // is this basically show??
    console.log(`${this.constructor.name} Hand: ${this.hand}`);
  }
}

Object.assign(Dealer.prototype, Hand);

/*
The game class feels really big and messy to me. I definitely feel a desire to
somehow break it down more. Maybe into 'flow' and 'rules' because these
feel like two distict concepts within the game. I don't know if that is valid,
just something I'm thinking about. 
*/
class TwentyOneGame {
  static ACE_MAX = 11;
  static ACE_MIN = 1;
  static FACE_CARD_VALUE = 10;
  static WINNING_HAND_VALUE = 21;
  
  static GAME_LOST_PENALTY = -1;
  static GAME_WON_AWARD = 1;
  
  static PLAYER_MAX_CASH = 10;
  static PLAYER_MIN_CASH = 1; 
  
  static DEALER_HIT_POINT_THRESHOLD = 17;
  
  constructor() {
    this.dealer = new Dealer();
    this.player = new Player();
    this.deck; 
    // I want to be clear that the deck is part of game state, but it is undefined
    // until the game starts. The advantage to being undefined is that every time
    // a round is started a new deck is created and shuffled for gameplay
  }
  
  //orchestration engine
  start() {
    this.displayWelcomeMessage();

    while ( true ) {
      
      this.playRound();
      if ( this.playerOutOfCash() || this.playerHasMaxCash() ) break;
      if ( !this.playAgain() ) break;
      
    }
    
    this.displayPlayerCashMessage();

    this.displayGoodbyeMessage();
  }
  
  displayWelcomeMessage() {
    console.log('Welcome to Twenty One the card game! Let\'s play!');
  }
  
  playRound() {
    this.player.displayCashTotal();
    this.deck = new Deck(); // <--- is it bad to set props of game object here instead of constructor?
    this.resetParticipantHands();
    this.dealCards();
    this.showCards();
    this.playerTurn();

    if ( !this.isBusted(this.player) ) {
      this.dealerTurn();
    }

    console.clear();
    this.showCards(); 
    this.displayResultsMessage();

    this.updateCashHolding();
    this.player.displayCashTotal();
  }
  
  resetParticipantHands() {
    this.player.resetHand();
    this.dealer.resetHand();
  }
  
  dealCards() {
    this.hit(this.player);
    this.hit(this.player);
    
    this.hit(this.dealer);
    this.hit(this.dealer);
  }
  
  hit(participant) {
    participant.addCardToHand( this.pickCard() );
  }
  
  pickCard() {
    return this.deck.cards.pop();
  }
  
  showCards() {
    console.log(this.player.displayHand());
    console.log(`Player's hand value: ${this.calculateHandValue(this.player.hand)}`);
    console.log(this.dealer.displayTopCard()); 
  }
  
  calculateHandValue(hand) {
    let handValue = 0;
  
    hand.forEach( card => {
      if ( card.isAce() ) handValue += TwentyOneGame.ACE_MAX;
      else handValue += this.getCardValue(card);
    });
    
    // account for Aces having two distict point value possibilities
    hand.filter( card => card.isAce() ).forEach( ace => { 
      if ( handValue > TwentyOneGame.WINNING_HAND_VALUE ) {
        handValue -= (TwentyOneGame.ACE_MAX - TwentyOneGame.ACE_MIN);
      }
    });
    
    return handValue;
  }
  
  getCardValue(card) {
    if ( card.isFaceCard() ) return TwentyOneGame.FACE_CARD_VALUE;
    if ( card.isAce() ) return [TwentyOneGame.ACE_MAX, TwentyOneGame.ACE_MIN]; 
    return card.getRank();
  }
  
  playerTurn() {
    while ( this.wantsToHit() ) {

      this.hit(this.player); 
      this.player.displayHand(); 
      
      console.log(`Player hand value: ${this.calculateHandValue(this.player.hand)}`);
      if ( this.isBusted(this.player) ) break;
    } 
  }
  
  wantsToHit() {
    let userChoice = readline.question('hit or stay? Enter: h OR s: ');
    console.log(`Player chose to ${userChoice === 'h' ? 'hit' : 'stay'}`);
    
    return (userChoice === 'h') ? true : false;
  }
  
  isBusted(participant) {
    return (this.calculateHandValue(participant.hand) > TwentyOneGame.WINNING_HAND_VALUE) ?
    true : false;
  }
  
  dealerTurn() {
    while ( this.calculateHandValue(this.dealer.hand) < 
           TwentyOneGame.DEALER_HIT_POINT_THRESHOLD ) {

      this.hit(this.dealer);
      
      if ( this.isBusted(this.dealer) ) break;
    } 
  }
  
  displayResultsMessage() {
    let resultsMessage = '';
    
    if ( this.isBusted(this.dealer) ){
      resultsMessage = 'Dealer busted! You win!';
    } else if ( this.isBusted(this.player) ) {
      resultsMessage = 'You busted! Dealer wins!';
    } 
    
    if ( this.playerWon() ) {
      resultsMessage = 'You win!';
    } else if ( this.dealerWon() ) {
      resultsMessage = 'Dealer wins.';
    } else {
      resultsMessage = 'Tie game.';
    }
    
    console.log(resultsMessage);
  }
  
  getWinner() {
    if ( this.isBusted(this.player) ) return this.dealer;
    if ( this.isBusted(this.dealer) ) return this.player;
    
    let playerScore = this.calculateHandValue(this.player.hand);
    let dealerScore = this.calculateHandValue(this.dealer.hand);
    
    if (playerScore > dealerScore) return this.player;
    if (dealerScore > playerScore) return this.dealer;
    
    return null;
  }
  
  playerWon() {
    return (this.getWinner() instanceof Player);
  }
  
  dealerWon() {
    return (this.getWinner() instanceof Dealer);
  }
  
  updateCashHolding() {
    this.player.cash += ( this.playerWon() ) ? // <-- is accessing the player cash prop like this bad practice?
      TwentyOneGame.GAME_WON_AWARD : 
      TwentyOneGame.GAME_LOST_PENALTY;
  }
  
  playerOutOfCash() {
    return this.player.cash < TwentyOneGame.PLAYER_MIN_CASH;
  }
  
  playerHasMaxCash(participant) {
    return this.player.cash >= TwentyOneGame.PLAYER_MAX_CASH;
  }
  
  playAgain() {
    let userChoice = readline.question('Would you like to play another round? y/n: ');
    return userChoice === 'y';
  }
  
  displayPlayerCashMessage() {
    if ( this.playerOutOfCash() ) {
      console.log("You're broke! Go home!");
    } else if ( this.playerHasMaxCash() ){
      console.log("You're rich! Go home!");
    }
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Twenty One! Goodbye!');
  }
}

let game = new TwentyOneGame();
game.start();