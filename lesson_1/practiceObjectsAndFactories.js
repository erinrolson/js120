function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,
    
    getDescription() {
      return `${this.title} was written by ${this.author}. ` + 
      `I ${this.read ? 'have' : 'haven\'t'} read it.`;
    },
    
    readBook() {
      this.read = true;
    }
  };
}

let mythos = createBook('Mythos', 'Stephen Fry');
let pretty = createBook(('Me Talk Pretty One Day', 'David Sedaris'));
let aunts  = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse');
aunts.readBook()
console.log(aunts.getDescription());
