function Hamster() {
  this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length );
alert( lazy.food.length );
