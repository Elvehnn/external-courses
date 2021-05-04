const Hangman = function(word) {   
  this.arrayFromWord = word.split('');
  this.guessedString = [...(word.replace(/\w/g, '_'))];
  this.wrongSymbols = [];
  this.errorsLeft = 6;
};

Hangman.prototype = {
  guess: function(letter) { 
    let index = this.arrayFromWord.indexOf(letter); 
    
    if (this.wrongSymbols.indexOf(letter) !== -1 || this.guessedString.indexOf(letter) !== -1){
		console.log('You have already entered this letter');
		return this.guess;
	  } 
            
    if (index === -1) {
      this.wrongSymbols.push(letter);
      this.errorsLeft--;
      if (this.errorsLeft < 0) {
        console.log('Sorry, you lost!');
        return this.guess;
      }
        console.log(`${this.getStatus()} | ${this.wrongSymbols.join(', ')}`);
        return this.guess;
    }
     
    while (index !== -1) {
      this.guessedString[index] = this.arrayFromWord[index];
      index = this.arrayFromWord.indexOf(letter, index + 1);
      // console.log(this.guessedString.join(''));
    } 
    
    if (this.guessedString.join('') === this.arrayFromWord.join('')) {
       console.log(`${this.guessedString.join('')} | Cool! You won!`);
    };

    return this;
  },
  
  getGuessedString: function() { 
    return this.guessedString;      
  },

  getErrorsLeft: function() { 
    return this.errorsLeft;
  },

  getWrongSymbols: function() { 
    return this.wrongSymbols;
  },

  getStatus: function() { 
    return (`${this.guessedString} | errors left ${this.errorsLeft}`);
  },

  startAgain: function(newWord) { 
    return new Hangman(newWord);
  },
}

const hangman = new Hangman();
module.exports = hangman;






