/*
Complete this class so that the test cases shown below work as intended. 
You are free to add any properties you need.

You may assume that the input will always fit in your terminal window.

Test Cases
*/

class Banner {
  static CORNER_SYMBOL = '+'; 
  static TOP_LINE_SYMBOL = '-'; 
  static SIDE_LINE_SYMBOL = '|'; 
  static EMPTY_LINE_SYMBOL = ' ';
  static MIN_TOP_LINE_SYMBOL = 2;
  static MIN_SIDE_LINE_SYMBOL = 3; // might not be relevant 
  
  
  constructor(message = '') {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(),
                 this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    // determine how many dashes you need
    // always flanked by + symbol
    // +--+
    return `${Banner.CORNER_SYMBOL}${Banner.TOP_LINE_SYMBOL.repeat(this.getMessageLength() + Banner.MIN_TOP_LINE_SYMBOL)}${Banner.CORNER_SYMBOL}`;
  }

  emptyLine() {
    return `${Banner.SIDE_LINE_SYMBOL}${Banner.EMPTY_LINE_SYMBOL.repeat(this.getMessageLength() + Banner.MIN_TOP_LINE_SYMBOL)}${Banner.SIDE_LINE_SYMBOL}`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
  
  getMessageLength() {
    return this.message.length;
  }
}

let banner1 = new Banner('To go boldly where no one has gone before.');
banner1.displayBanner();

let banner2 = new Banner();
banner2.displayBanner();