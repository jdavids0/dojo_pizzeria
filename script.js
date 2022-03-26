// Pizza 1

function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza={};
    pizza.crust=crustType;
    pizza.sauce=sauceType;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
}


var pizza1=pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni, sausage"]);
console.log(pizza1);

function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza={};
    pizza.crust=crustType;
    pizza.sauce=sauceType;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
}

var pizza1=pizzaOven("hand tossed", "marinara", ["mozzarella, feta"], ["mozzarella, olives, onions"]);
console.log(pizza1);

// Pizza 3 + 4

function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza={};
    pizza.crust=crustType;
    pizza.sauce=sauceType;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
}

var pizza1=pizzaOven("thin", "traditional", ["mozzarella"], ["pineapple, bacon, garlic"]);
console.log(pizza1);

var pizza2=pizzaOven("deep dish", "sauceless", ["mozzarella, white"], ["spinach garlic chicken"]);
console.log(pizza2);

// random pizza - got from solution, go back and watch video to understand better
var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
];

var cheeses = [
    "mozzarella",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "olives",
    "bell peppers",
    "onions",
];

// so first write out an array for each variable

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

// a function called randomRange

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

// randomPick will receive a random integer from an array - so Math.random going thru the length of the array, and Math.floor keeps it in the right range

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());