# Javascript Learning

## Variable

```js
function speacker() {
  var sentence = "Bird is the word.";

  console.log(sentence);
}

speacker();

// scope variable

// global variable

function speacker2() {
  sentence2 = "Bird is the word2.";
}

speacker2();
console.log(sentence2);

/*
Bird is the word.
Bird is the word2.
*/
//----------------------------------------------
var cuteAnimal = "quokka";

function makeVariable() {
  var cuteAnimal = "sugar glider";
  return cuteAnimal;
}

console.log(makeVariable());

console.log(cuteAnimal);

/*
sugar glider
quokka
*/
//----------------------------------------------
// Changing variable values

volume = 10; // global

function returnEleven() {
  var volume = 11;
  return volume;
}

console.log("1: " + returnEleven());
console.log("2: " + volume);

function goToEleven() {
  volume = 11;
  return volume;
}

console.log("3: " + goToEleven());
console.log("4: " + volume);

/*
1: 11
2: 10
3: 11
4: 11
*/
```

## Arithmetic

```js
var number = 10;

function add5() {
  number += 5;
}

function divideBy3() {
  number /= 3;
}

divideBy3();

console.log(number);

// reset number
number = 10;

add5();

console.log(number);

divideBy3();

console.log(number);

console.log(parseInt("1", 10));

console.log(parseInt("2", 10));

console.log(parseInt("GG", 10));

console.log(parseFloat("102.23231"));

/*
3.3333333333333335
15
5
1
2
NaN
102.23231
undefined
*/
```

## Scope

```js
function myFunction() {
  var y = 2;
  console.log(y);
}

//myFunction();
//console.log(y);

var x = 1;
function myFunction2() {
  z = 2;
  console.log(x);
}

//console.log(z);
//console.log(x);

// THE SCOPE OF SCOPE, OR GETTING CLOSURE
function outerFunction() {
  var innerVariable = "I'm sort of a secret.";

  return function innerScope() {
    var inaccessible = "Nothing can touch me.";

    return innerVariable;
  };
}
//outerFunction();

var myScope = outerFunction();

myScope();

// SHADOWY VARIABLES

var animal = "dog";

function makeZoo() {
  var animal = "cat";
  console.log(`I think I'll put this ${animal} in the zoo.`);
}

makeZoo();
animal;

/*
I think I'll put this cat in the zoo.
'dog'
*/
```

## Function

```js
var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();

theFunk();
// 'FUNKY!'
```

## Array

```js
var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var prieNumbers = [2,3,5,7,11,13,17,19,23,29,31,37];

var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];

var weirdGreeting = ["he", 110, "w" ,0, "r" , 1 , "d"];

var empty = [];

var evenNumbers = new Array();

// ADDING AN ELEMENT

// push elements onto the end of an array:

var superheroines = ["catwoman", "shee-hulk", "mystique"];

superheroines.push("wonder woman");

console.log(superheroines);


// We can also unshift elements onto the beginning of an array:

var cities = ["New York", "San Francisco"];

cities.unshift("Philadelphia");

console.log(cities);

// These actions change the underlying array — in other words, they mutate its value.

// spread operator "..."

var thailand = ["Bangkok", "Chaing mai" , "phuket"];

console.log(["lopburi" , ...thailand]) ;
// [ 'lopburi', 'Bangkok', 'Chaing mai', 'phuket' ]

thailand;
// ["Bangkok", "Chaing mai" , "phuket"]

var thailand2 = ["Bangkok", "Chaing mai" , "phuket"];

console.log([...thailand2,"lopburi" ]) ;
// [ 'Bangkok', 'Chaing mai', 'phuket', 'lopburi' ]


thailand2;
//  ['Bangkok', 'Chaing mai', 'phuket' ]

// new 
var am_cities = ["New York", "San Francisco"];

am_cities = ["Philadelphia",  ...am_cities];

const cats = ["Milo", "Garfield"];

console.log(cats);

const moreCats = ["Felix", ...cats];

console.log(moreCats);

// While we can add elements to an array directly at specific indexes
var myArray = [1,2,3,];

myArray[5] = 5;

myArray;

// ACCESSING AN ELEMENT
var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];

console.log(entrepreneurs[0]);

var bio = " is the co-founder and editress-in-chief of The Huffington Post";

console.log(entrepreneurs[2] + bio);

entrepreneurs[9];

// REMOVING AN ELEMENT
const days = ["Monday","Tuesday", "Wednesday"];

days.shift()

days;
// As with unshift, this method is destructive; it mutates the underlying array.

/*
[ 'catwoman', 'shee-hulk', 'mystique', 'wonder woman' ]
[ 'Philadelphia', 'New York', 'San Francisco' ]
[ 'lopburi', 'Bangkok', 'Chaing mai', 'phuket' ]
[ 'Bangkok', 'Chaing mai', 'phuket', 'lopburi' ]
[ 'Milo', 'Garfield' ]
[ 'Felix', 'Milo', 'Garfield' ]
Elizabeth Holmes
Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post
[ 'Tuesday', 'Wednesday' ]
*/
```
