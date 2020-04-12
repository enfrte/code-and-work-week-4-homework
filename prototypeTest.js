// Prototype example

function Hero(name, level, lastWords){
	this.name = name;
	this.level = level;
	this.lastWords = lastWords;
}

Hero.prototype.appear = function () {
	return `${this.name} - ${this.level}`;
}

Hero.prototype.sayLastWords = function () {
  return `${this.lastWords}`;
}

const player1 = new Hero('Noel', 8, 'Oh well');
console.log(player1.appear());
console.log(player1.sayLastWords());
