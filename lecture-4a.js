
// Exercise 1
class Animal {		
	constructor(isFriendly) {
		//super(); // The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
		this.isFriendly = isFriendly;
		this.greetings = ['breathing'];
		this.soundIndex = 0;
	}

	// function that console.logs a string from the greetings array
	greet() {
		let self = this;
		let makeSound;
		makeSound = this.greetings.filter(function(currentValue, index, arr) { 
			return index === self.soundIndex;
		});
		//makeSound;
		/*
		this.greetings.forEach(function(currentValue, index, array) {
			if (index === self.soundIndex) {
				makeSound = currentValue;
			}			
		});
*/
		if (this.greetings.length > this.soundIndex + 1) {
			this.soundIndex++;
		} 
		else {
			this.soundIndex = 0;
		}
		console.log(`Animal, ${makeSound[0]}`);
	}

	// newGreeting(), a function that adds a greeting to the greetings array
	newGreeting(addSound) {
		this.greetings.push(addSound);
		//console.log(this.greetings);
	}
}
const dog = new Animal(true);
console.log('Ex 1...');
dog.greet();
dog.newGreeting('bark');
dog.greet();

// Exercise 2
/*
Create a new Dog class that inherits properties from the Animal class and adds the following attributes:
isFriendly boolean is true
name string, a user-definable attribute that are taken in as argument (give also a default value!)
Add a default greeting “bark” to the greetings list. Let’s assume all dogs can bark

Create an instance of the Dog class with a name 
add new greetings of your choice
run the greet function a few times!
*/

class Dog extends Animal {
	constructor(name = 'Fido') {
		super(); // The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
		this.isFriendly = true;
		this.name = name;
		this.greetings = ['bark', ...this.greetings]
		//console.log(this.greetings);
	}
}

console.log('Ex 2...');
const dogB = new Dog('James');
dogB.greet();
dogB.greet();
dogB.greet();
dogB.greet();
dogB.greet();

/*
// Prototype example

function Hero(name, level, lastWords){
	this.name = name;
	this.level = level;
	this.lastWords = lastWords;
}

Hero.prototype.greet = function () {
	return `${this.name} - ${this.level}`;
}

Hero.prototype.lastWords = function () {
	return `${this.lastWords}`;
}

const player1 = new Hero('Noel', 8, 'Oh well');
console.log(player1.greet());
console.log(player1.lastWords());
*/