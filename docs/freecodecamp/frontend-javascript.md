# Basic Javascript

## Comment your JavaScript Code

Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

Using `//` will tell JavaScript to ignore the remainder of the text on the current line:

`// This is an in-line comment.`

You can make a multi-line comment beginning with `/* and ending with */`:

> Practice

```js
/* This is a 
   multi-line comment */
```

**Best Practice**

As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others and for your future self.

> Practice

```js
// comment

/*
This is Comment
*/
```

## Declare JavaScript Variables

In computer science, `data` is anything that is meaningful to the computer. JavaScript provides seven different `data types` which are `undefined`, `null`, `boolean`, `string`, `symbol`, `number`, and `object`.

For example, computers distinguish between numbers, such as the number `12`, and `strings`, such as `"12"`, `"dog"`, or `"123 cats"`, which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

`Variables` allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the seven data types may be stored in a variable.

`Variables` are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer `variables` differ from mathematical variables in that they can store different values at different times.

We tell JavaScript to create or `declare` a variable by putting the keyword var in front of it, like so:

`var ourName;`

creates a `variable` called `ourName`. In JavaScript we end statements with semicolons.

`Variable` names can be made up of numbers, letters, and $ or \_, but may not contain spaces or start with a number.

> Practice

```js
// Example
var ourName;

// Define myName below this line
var myName;
```

## Storing Values with the Assignment Operator

In JavaScript, you can store a value in a variable with the `assignment` operator.

`myVariable = 5;`

Assigns the `Number` value `5` to `myVariable`.

Assignment always goes from right to left. Everything to the right of the `=` operator is resolved before the value is assigned to the variable to the left of the operator.

```js
myVar = 5;
myNum = myVar;
```

Assigns `5` to `myVar` and then resolves `myVar` to `5` again and assigns it to `myNum`.

> Practice

```js
// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;
```

## Initializing Variables with the Assignment Operator

It is common to `initialize` a variable to an initial value in the same line as it is declared.

`var myVar = 0;`

Creates a new variable called `myVar` and assigns it an initial value of `0`.

> Practice

```js
// Example
var ourVar = 19;

// Only change code below this line
var a = 9;
```

## Understanding Uninitialized Variables

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be NaN which means `"Not a Number"`. If you concatenate a string with an `undefined` variable, you will get a literal `string` of `"undefined"`.

> Practice

```js
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

## Understanding Case Sensitivity in Variables

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

**Best Practice**

Write variable names in Javascript in `camelCase`. In `camelCase`, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

**Examples:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsTooLong;
```

> Practice

```js
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```

## Add Two Numbers with JavaScript

`Number` is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the `+` symbol as addition operation when placed between two numbers.

**Example**

```js
myVar = 5 + 10; // assigned 15
```

> Practice

```js
var sum = 10 + 10;
```

## Subtract One Number from Another with JavaScript

We can also subtract one number from another.

JavaScript uses the `-` symbol for subtraction.

**Example**

```js
myVar = 12 - 6; // assigned 6
```

> Practice

```js
var difference = 45 - 33;
```

## Multiply Two Numbers with JavaScript

We can also multiply one number by another.

JavaScript uses the `*` symbol for multiplication of two numbers.

**Example**

```js
myVar = 13 * 13; // assigned 169
```

> Practice

```js
var product = 8 * 10;
```

## Divide One Number by Another with JavaScript

We can also divide one number by another.

JavaScript uses the `/` symbol for division.

**Example**

```js
myVar = 16 / 2; // assigned 8
```

> Practice

```js
var quotient = 66 / 33;
```

## Increment a Number with JavaScript

You can easily `increment` or add one to a variable with the `++` operator.

`i++;`

is the equivalent of

`i = i + 1;`

**Note**
The entire line becomes `i++;`, eliminating the need for the equal sign.

> Practice

```js
var myVar = 87;

// Only change code below this line
myVar++;
```

## Decrement a Number with JavaScript

You can easily decrement or decrease a variable by one with the `--` operator.

`i--;`

is the equivalent of

`i = i - 1;`

Note
The entire line becomes `i--;`, eliminating the need for the equal sign.

> Practice

```js
var myVar = 11;

// Only change code below this line
myVar--;
```

## Create Decimal Numbers with JavaScript

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as `floating point` numbers or `floats`.

Note
Not all real numbers can accurately be represented in `floating point`. This can lead to rounding errors.

> Practice

```js
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = ourDecimal;
```

## Multiply Two Decimals with JavaScript

In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

Let's multiply two decimals together to get their product.

> Practice

```js
var product = 2.0 * 2.5;
```

## Divide one Decimal by Another with JavaScript

Now let's divide one decimal by another.

> Practice

```js
var quotient = 4.4 / 2.0;
```

## Finding a Remainder in JavaScript

The `remainder` operator `%` gives the remainder of the division of two numbers.

**Example**

```
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
```

**Usage**

In mathematics, a number can be checked even or odd by checking the remainder of the division of the number by `2`.

```
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
```

**Note**

The `remainder` operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.

> Practice

```js
// Only change code below this line

var remainder;

remainder = 11 % 3;
```

## Compound Assignment With Augmented Addition

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

`myVar = myVar + 5;`

to add `5` to `myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the `+=` operator.

`myVar += 5;` will add `5` to `myVar`.

> Practice

```js
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;
```

## Compound Assignment With Augmented Subtraction

Like the `+=` operator, `-=` subtracts a number from a variable.

`myVar = myVar - 5;`

will subtract `5` from `myVar`. This can be rewritten as:

`myVar -= 5;`

> Practice

```js
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -= 15;
c -= 1;
```

## Compound Assignment With Augmented Multiplication

The `*=` operator multiplies a variable by a number.

`myVar = myVar * 5;`

will multiply `myVar` by `5`. This can be rewritten as:

`myVar *= 5;`

> Practice

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;
```

## Compound Assignment With Augmented Division

The `/=` operator divides a variable by another number.

`myVar = myVar / 5;`

Will divide `myVar` by `5.` This can be rewritten as:

`myVar /= 5;`

> Practice

```js
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;
```

## Convert Celsius to Fahrenheit

To test your learning, you will create a solution "from scratch". Place your code between the indicated lines and it will be tested against multiple test cases.

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

You are given a variable `celsius` representing a temperature in Celsius. Use the variable `fahrenheit` already defined and apply the algorithm to assign it the corresponding temperature in Fahrenheit.

> Practice

```js
function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = celsius * (9 / 5) + 32;

  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30); // 86
```

## Declare String Variables

Previously we have used the code

`var myName = "your name";`

`"your name"` is called a `string literal`. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

> Practice

```js
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line
var myFirstName = "Art";
var myLastName = "dvp";
```

## Escaping Literal Quotes in Strings

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can `escape` a quote from considering it as an end of string quote by placing a `backslash (\)` in front of the quote.

`var sampleStr = "Alan said, \"Peter is learning JavaScript\".";`

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

`Alan said, "Peter is learning JavaScript".`

> Practice

```js
var myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line
```

## Quoting Strings with Single Quotes

`String` values in JavaScript may be written with single or double quotes, so long as you start and end with the same type of quote. Unlike some languages, single and double quotes are functionally identical in JavaScript.

`"This string has \"double quotes\" in it"`

The value in using one or the other has to do with the need to `escape` quotes of the same type. Unless they are escaped, you cannot have more than one pair of whichever quote type begins a string.

If you have a string with many double quotes, this can be difficult to read and write. Instead, use single quotes:

`'This string has "double quotes" in it. And "probably" lots of them.'`

> Practice

```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

## Escape Sequences in Strings

Quotes are not the only characters that can be `escaped` inside a string. Here is a table of common escape sequences:

| Code | Output          |
| :--- | :-------------- |
| \'   | single quote    |
| \"   | double quote    |
| \\   | backslash       |
| \n   | newline         |
| \r   | carriage return |
| \t   | tab             |
| \b   | backspace       |
| \f   | form feed       |

Note that the backslash itself must be escaped in order to display as a backslash.

> Practice

```js
var myStr = "FirstLine\n\\SecondLine\\\rThirdLine"; // Change this line

// output
/*
FirstLine
\SecondLine\
ThirdLine
*/
```

## Concatenating Strings with Plus Operator

In JavaScript, when the `+` operator is used with a `String` value, it is called the `concatenation` operator. You can build a new string out of other strings by `concatenating` them together.

**Example**

`'My name is Alan,' + ' I concatenate.'`

**Note**

Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

> Practice

```js
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end.";
```

## Concatenating Strings with the Plus Equals Operator

We can also use the `+=` operator to `concatenate` a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

**Note**

Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

> Practice

```js
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

## Constructing Strings with Variables

Sometimes you will need to build a string, [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) style. By using the concatenation operator (`+`), you can insert one or more variables into a string you're building.

> Practice

```js
// Example
var ourName = "Free Code Camp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Art";
var myStr = "My name is " + myName + " and I am swell!";
```

## Appending Variables to Strings

Just as we can build a string over multiple lines out of string `literals`, we can also append variables to a string using the plus equals (`+=`) operator.

> Practice

```js
// Example
var anAdjective = "awesome!";
var ourStr = "Free Code Camp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "the awesome";
var myStr = "Learning to code is ";
myStr += someAdjective;
```

## Find the Length of a String

You can find the length of a `String` value by writing `.length` after the string variable or string literal.

`"Alan Peter".length; // 10`

For example, if we created a variable `var firstName = "Charles"`, we could find out how long the string `"Charles"` is by using the `firstName.length` property.

> Practice

```js
// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;
```

## Use Bracket Notation to Find the First Character in a String

`Bracket notation` is a way to get a character at a specific `index` within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as `Zero-based` indexing.

For example, the character at index 0 in the word "Charles" is "C". So if `var firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

> Practice

```js
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```

## Understand String Immutability

In JavaScript, `String` values are `immutable`, which means that they cannot be altered once created.

For example, the following code:

> Practice

```js
var myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of `myStr` to "Job", because the contents of `myStr` cannot be altered. Note that this does not mean that `myStr` cannot be changed, just that the individual characters of a `string literal` cannot be changed. The only way to change `myStr` would be to assign it with a new string, like this:

```js
var myStr = "Bob";
myStr = "Job";
```

> Practice

```js
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World"; // Fix Me
```

## Use Bracket Notation to Find the Nth Character in a String

You can also use `bracket notation` to get the character at other positions within a string.

Remember that computers start counting at `0`, so the first character is actually the zeroth character.

> Practice

```js
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
// d

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];
// v
```

## Use Bracket Notation to Find the Last Character in a String

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if `var firstName = "Charles"`, you can get the value of the last letter of the string by using `firstName[firstName.length - 1]`.

> Practice

```js
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
// a

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];
// e
```

## Use Bracket Notation to Find the NthtoLast Character in a String

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the `var firstName = "Charles"` string by using `firstName[firstName.length - 3]`

> Practice

```js
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
//

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
// c
```

## Word Blanks

We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - `"It was really ____, and we ____ ourselves ____"`. This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

```js
var sentence =
  "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";
```

In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator `+` to build a new string, using the provided variables: `myNoun`, `myAdjective`, `myVerb`, and `myAdverb`. You will then assign the formed string to the `result` variable.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

> Practice

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
wordBlanks("cat", "little", "hit", "slowly");
```

## Store Multiple Values in one Variable using JavaScript Arrays

With JavaScript `array` variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

`var sandwich = ["peanut butter", "jelly", "bread"].`

> Practice

```js
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Artdvp", 25];
```

## Nest one Array within Another Array

You can also nest arrays within other arrays, like this: `[["Bulls", 23], ["White Sox", 45]]`. This is also called a `Multi-dimensional Array`.

> Practice

```js
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [["marvel", 1000], ["dc", 500]];
```

## Access Array Data with Indexes

We can access the data inside arrays using `indexes`.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use `zero-based` indexing, so the first element in an array is element `0.`

**Example**

```js
var array = [1, 2, 3];
array[0]; // equals 1
var data = array[1]; // equals 2
```

> Practice

```js
// Example
var ourArray = [1, 2, 3];
var ourData = ourArray[0]; // equals 1

// Setup
var myArray = [1, 2, 3];

// Only change code below this line.
var myData = myArray[0];
```

## Modify Array Data With Indexes

Unlike strings, the entries of arrays are mutable and can be changed freely.

**Example**

```js
var ourArray = [3, 2, 1];
ourArray[0] = 1; // equals [1,2,1]
```

> Practice

```js
// Example
var ourArray = [1, 2, 3];
ourArray[1] = 3; // ourArray now equals [1,3,3].

// Setup
var myArray = [1, 2, 3];

// Only change code below this line.
myArray[0] = 3;
```

## Access MultiDimensional Arrays With Indexes

One way to think of a `multi-dimensional` array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

**Example**

```js
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

> Practice

```js
// Setup
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];
// 8
```

## Manipulate Arrays With push

An easy way to append data to the end of an array is via the `push()` function.

`.push()` takes one or more `parameters` and "pushes" them onto the end of the array.

```js
var arr = [1, 2, 3];
arr.push(4);
// arr is now [1,2,3,4]
```

> Practice

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);
```

## Manipulate Arrays With pop

Another way to change the data in an array is with the `.pop()` function.

`.pop()` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

For example, for the code

`var oneDown = [1, 4, 6].pop();`

the variable `oneDown` now holds the value `6` and the array becomes `[1, 4]`.

> Practice

```js
// Example
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();
// [["cat", 2]]
```

## Manipulate Arrays With shift

`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift(`) comes in. It works just like `.pop()`, except it removes the first element instead of the last.

> Practice

```js
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
// [["John", 23]]
```

## Manipulate Arrays With unshift

Not only can you `shift` elements off of the beginning of an array, you can also `unshift` elements to the beginning of an array i.e. add elements in front of the array.

`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.

myArray.unshift(["Paul", 35]);
```

## Shopping List

Create a shopping list in the variable `myList`. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

`["Chocolate Bar", 15]`

There should be at least 5 sub-arrays in the list.

> Practice

```js
var myList = [];

myList.push(["Bacon", 2]);
myList.push(["Cake", 6]);
myList.push(["Icecream", 3]);
myList.push(["Popcorn", 10]);
myList.push(["Cola", 3]);
```

## Write Reusable JavaScript with Functions

In JavaScript, we can divide up our code into reusable parts called `functions`.

Here's an example of a function:

```js
function functionName() {
  console.log("Hello World");
}
```

You can call or `invoke` this function by using its name followed by parentheses, like this:

`functionName();`

Each time the function is called it will print out the message `"Hello World"` on the dev console. All of the code between the curly braces will be executed every time the function is called.

> Practice

```js
// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
```

## Passing Values to Functions with Arguments

`Parameters` are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or `"passed"`) into a function when it is called are known as `arguments`.

Here is a function with two parameters, `param1` and `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Then we can call `testFun`:

`testFun("Hello", "World");`

We have passed two arguments, `"Hello"` and `"World"`. Inside the function, `param1` will equal "Hello" and `param2` will equal "World". Note that you could call `testFun` again with different arguments and the parameters would take on the value of the new arguments.

> Practice

```js
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);
```

## Global Scope and Functions

In JavaScript, `scope` refers to the visibility of variables. Variables which are defined outside of a function block have `Global` scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the `var` keyword are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `var`.

> Practice

```js
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// myGlobal: 10
// oopsGlobal: 5
```

## Local Scope and Functions

Variables which are declared within a function, as well as the function parameters have `local` scope. That means, they are only visible within that function.

Here is a function `myTest` with a local variable called `loc`.

```js
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // "foo"
console.log(loc); // "undefined"
```

`loc` is not defined outside of the function.

> Practice

```js
function myLocalScope() {
  "use strict";
  var myVar = "Bar";

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test
```

## Global vs Local Scope in Functions

It is possible to have both `local` and `global` variables with the same name. When you do this, the `local` variable takes precedence over the `global` variable.

In this example:

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

The function `myFun` will return `"Head"` because the `local` version of the variable is present.

> Practice

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
```

## Return a Value from a Function with Return

We can pass values into a function with `arguments`. You can use a `return` statement to send a value back out of a function.

Example

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

`plusThree` takes an `argument` for `num` and returns a value equal to `num + 3`.

> Practice

```js
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(val) {
  return val * 5;
}

timesFive(5);
timesFive(2);
timesFive(0);
```

## Assignment with a Returned Value

If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function `sum` which adds two numbers together, then:

`ourSum = sum(5, 12);`

will call `sum` function, which returns a value of `17` and assigns it to `ourSum` variable.

> Practice

```js
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
// 2
```

## Stand in Line

In Computer Science a `queue` is an abstract `Data Structure` where items are kept in order. New items can be added at the back of the `queue` and old items are taken off from the front of the `queue`.

Write a function `nextInLine` which takes an array (`arr`) and a number (`item`) as arguments. Add the number to the end of the array, then remove the first element of array. The `nextInLine` function should then return the element that was removed.

> Practice

```js
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  item = arr.shift();
  return item; // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
/*
Before: [1,2,3,4,5]
1
After: [2,3,4,5,6]
*/
```

## Understanding Boolean Values

Another data type is the `Boolean`. `Booleans` may only be one of two values: `true` or `false`. They are basically little on-off switches, where `true` is "on" and `false` is "off." These two states are mutually exclusive.

**Note**

`Boolean` values are never written with quotes. The `strings` "`true`" and "`false`" are not `Boolean` and have no special meaning in JavaScript.

> Practice

```js
function welcomeToBooleans() {
  // Only change code below this line.

  return true; // Change this line

  // Only change code above this line.
}

welcomeToBooleans();
```

## Use Conditional Logic with If Statements

`If` statements are used to make decisions in code. The keyword `if`tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as `Boolean` conditions because they may only be `true` or `false`.

When the condition evaluates to `true`, the program executes the statement inside the curly braces. When the Boolean condition evaluates to `false`, the statement inside the curly braces will not execute.

**Pseudocode**

```js
if (condition is true) {
  statement is executed
}
```

**Example**

```js
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
test(true); // returns "It was true"
test(false); // returns "It was false"
```

When `test` is called with a value of `true`, the `if` statement evaluates `myCondition` to see if it is `true` or not. Since it is `true`, the function returns "It was true". When we call `test` with a value of false, `myCondition` is not `true` and the statement in the curly braces is not executed and the function returns `"It was false"`.

> Practice

```js
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }
  // Only change code above this line.
}

// Change this value to test
trueOrFalse(true);
trueOrFalse(false);
```

## Comparison with the Equality Operator

There are many `Comparison Operators` in JavaScript. All of these operators return a boolean `true` or `false` value.

The most basic operator is the equality operator `==`. The equality operator compares two values and returns `true` if they're equivalent or `false` if they are not. Note that equality is different from assignment (`=`), which assigns the value at the right of the operator to a variable in the left.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

If `myVal` is equal to `10`, the equality operator returns `true`, so the code in the curly braces will execute, and the function will return `"Equal"`. Otherwise, the function will return `"Not Equal"`.

In order for JavaScript to compare two different `data types` (for example, `numbers` and `strings`), it must convert one type to another. Once it does, however, it can compare terms as follows:

```js
1 == 1; // true
1 == 2; // false
1 == "1"; // true
"3" == 3; // true
```

> Practice

```js
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
```

## Comparison with the Strict Equality Operator

Strict equality `(===)` is the counterpart to the equality operator (`==`). Unlike the equality operator, strict equality tests both the `data type` and value of the compared elements.

**Examples**

```js
3 === 3; // true
3 === "3"; // false
```

In the second example, `3` is a `Number` type and `'3'` is a `String` type.

> Practice

```js
// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
testStrict(7);
```

## Comparison with the Inequality Operator

The inequality operator (`!=`) is the opposite of the equality operator. It means "Not Equal" and returns `false` where equality would return `true` and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

```js
1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false
```

> Practice

```js
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
testNotEqual(99);
```

## Comparison with the Strict Inequality Operator

The strict inequality operator (`!==`) is the opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return `true` and vice versa. Strict inequality will not convert data types.

**Examples**

```js
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true
```

> Practice

```js
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {
    // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
testStrictNotEqual(17);
```

## Comparison with the Greater Than Operator

The greater than operator (`>`) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, greater than operator will convert data types of values while comparing.

**Examples**

```js
5 > 3; // true
7 > "3"; // true
2 > 3; // false
"1" > 9; // false
```

> Practice

```js
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
testGreaterThan(11);
testGreaterThan(99);
testGreaterThan(100);
testGreaterThan(101);
testGreaterThan(150);
```

## Comparison with the Greater Than Or Equal To Operator

The `greater than or equal to` operator (`>=`) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, `greater than or equal` to operator will convert data types while comparing.

**Examples**

```js
6 >= 6; // true
7 >= "3"; // true
2 >= 3; // false
"7" >= 9; // false
```

> Practice

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(10);
```

## Comparison with the Less Than Operator

The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

**Examples**

```js
2 < 5; // true
"3" < 7; // true
5 < 5; // false
3 < 2; // false
"8" < 4; // false
```

> Practice

```js
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
testLessThan(0);
testLessThan(25);
```

## Comparison with the Less Than Or Equal To Operator

The `less than or equal` to operator (`<=`) compares the values of two numbers. If the number to the left is less than or equal the number to the right, it returns `true`. If the number on the left is greater than the number on the right, it returns `false`. Like the equality operator, `less than or equal` to converts data types.

Examples

```js
4 <= 5; // true
"7" <= 7; // true
5 <= 5; // true
3 <= 2; // false
"8" <= 4; // false
```

> Practice

```js
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

// Change this value to test
testLessOrEqual(10);
```

## Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. The `logical and` operator `(&&)` returns true if and only if the `operands` to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

will only return "Yes" if `num` is between `6` and `9` (6 and 9 included). The same logic can be written as:

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

> Practice

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
```

## Comparisons with the Logical Or Operator

The `logical or` operator (`||`) returns `true` if either of the `operands` is `true`. Otherwise, it returns `false`.

The pattern below should look familiar from prior waypoints:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

will return "Yes" only if `num` is between `5` and `10` (5 and 10 included). The same logic can be written as:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

> Practice

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
```

## Introducing Else Statements

When a condition for an `if` statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

> Practice

```js
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
```

## Introducing Else If Statements

If you have multiple conditions that need to be addressed, you can chain `if` statements together with `else if` statements.

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

> Practice

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
```

## Logical Order in If Else Statements

Order is important in `if, else if` statements.

The loop is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

And the second just switches the order of the statements:

> Practice

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

While these two functions look nearly identical if we pass a number to both we get different outputs.

```js
foo(0); // "Less than one"
bar(0); // "Less than two"
```

> Practice

```js
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
orderMyLogic(5);
```

## Chaining If Else Statements

if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

> Practice

```js
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
  // Only change code above this line
}

// Change this value to test
testSize(7);
```

## Golf Code

In the game of golf each hole has a `par` meaning the average number of `strokes` a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below `par` your `strokes` are, there is a different nickname.

Your function will be passed `par` and `strokes` arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

| Strokes    | Return         |
| ---------- | -------------- |
| 1          | "Hole-in-one!" |
| <= par - 2 | "Eagle"        |
| par - 1    | "Birdie"       |
| par        | "Par"          |
| par + 1    | "Bogey"        |
| par + 2    | "Double Bogey" |
| >= par + 3 | "Go Home!"     |

`par` and `strokes` will always be numeric and positive.

> Practice

```js
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
golfScore(4, 7);
```

## Selecting from many options with Switch Statements

If you have many options to choose from, use a `switch` statement. A `switch` statement tests a value and can have many `case` statements which defines various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

Here is a `pseudocode` example:

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}
```

`case` values are tested with strict equality `(===).` The `break` tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.

> Practice

```js
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
```

## Adding a default option in Switch statements

In a `switch` statement you may not be able to specify all possible values as `case` statements. Instead, you can add the `default` statement which will be executed if no matching `case` statements are found. Think of it like the final `else` statement in an `if/else` chain.

A default statement should be the last case.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
}
```

> Practice

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
```

## Multiple Identical Options in Switch Statements

If the `break` statement is omitted from a `switch` statement's `case`, the following `case` statement(s) are executed until a `break` is encountered. If you have multiple inputs with the same output, you can represent them in a `switch` statement like this:

```js
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

Cases for 1, 2, and 3 will all produce the same result.

> Practice

```js
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
```

## Replacing If Else Chains with Switch

If you have many options to choose from, a `switch` statement can be easier to write than many chained `if/else if` statements. The following:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

can be replaced with:

```js
switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

> Practice

```js
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
```

## Returning Boolean Values from Functions

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean `true` or `false` value.

A common `anti-pattern` is to use an `if/else` statement to do a comparison and then `return` `true/false`:

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

Since `===` returns `true` or `false`, we can return the result of the comparison:

```js
function isEqual(a, b) {
  return a === b;
}
```

> Practice

```js
function isLess(a, b) {
  // Fix this code
  return a < b;
}

// Change these values to test
isLess(10, 15);
// true
```

## Return Early Pattern for Functions

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

**Example**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun();
```

The above outputs "Hello" to the console, returns "World", but `"byebye"` is never output, because the function exits at the `return` statement.

> Practice

```js
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2, 2);
// 8
abTest(-2, 2);
// undefined
```

## Counting Cards

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called [Card Counting](https://en.wikipedia.org/wiki/Card_counting).

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

| Count Change | Cards                  |
| ------------ | ---------------------- |
| +1           | 2, 3, 4, 5, 6          |
| 0            | 7, 8, 9                |
| -1           | 10, 'J', 'Q', 'K', 'A' |

You will write a `card` counting function. It will receive a card parameter and increment or decrement the global `count` variable according to the card's value (see table). The function will then return a string with the current count and the string `"Bet"` if the count is positive, or `"Hold"` if the count is zero or negative. The current count and the player's decision (`"Bet"` or `"Hold"`) should be separated by a single space.

**Example Output**

`"-3 Hold"`
`"5 Bet"`

> Practice

```js
var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }

  if (count <= 0) {
    return count + " Hold";
  } else {
    return count + " Bet";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
```

## Build JavaScript Objects

You may have heard the term `object` before.

Objects are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through what are called `properties`.

Here's a sample object:

```js
var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"]
};
```

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

> Practice

```js
// Example
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"]
};

// Only change code below this line.

var myDog = {
  name: "Cownom",
  legs: 4,
  tails: 1,
  friends: ["pukkard"]
};
```

## Accessing Objects Properties with the Dot Operator

There are two ways to access the properties of an object: the dot operator (`.`) and bracket notation (`[]`), similar to an array.

The dot operator is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using the dot operator (.) to read an object property:

```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```

> Practice

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line
```

## Accessing Objects Properties with Bracket Notation

The second way to access the properties of an object is bracket notation (`[]`). If the property of the object you are trying to access has a space in it, you will need to use bracket notation.

Here is a sample of using bracket notation to read an object property:

```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
```

Note that property names with spaces in them must be in quotes (single or double).

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
```

## Accessing Objects Properties with Variables

Another use of bracket notation on objects is to use a variable to access a property. This can be very useful for iterating through lists of the object properties or for doing the lookup.

Here is an example of using a variable to access a property:

```js
var someProp = "propName";
var myObj = {
  propName: "Some Value"
}
myObj[someProp]; // "Some Value"
```
Here is one more:

```js
var myDog = "Hunter";
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
}
```
var breed = dogs[myDog];
console.log(breed);// "Doberman"
Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
```

## Updating Object Properties

After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

For example, let's look at `ourDog`:

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property:

`ourDog.name = "Happy Camper";` or

`ourDog["name"] = "Happy Camper";`

Now when we evaluate `ourDog.name`, instead of getting "Camper", we'll get his new name, "Happy Camper".

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.name = "Happy Coder";
```

## Add New Properties to a JavaScript Object

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a `"bark"` property to `ourDog`:

`ourDog.bark = "bow-wow";`

or

`ourDog["bark"] = "bow-wow";`

Now when we evaluate `ourDog.bark`, we'll get his bark, "bow-wow".

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.bark = "woof";
```

## Delete Properties from a JavaScript Object

We can also delete properties from objects like this:

`delete ourDog.bark;`

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

// Only change code below this line.
delete myDog.tails;
```

## Using Objects for Lookups

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a `switch` statement or an `if/else` chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  result = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  // Only change code above this line
  return result[val];
}

// Change this value to test
phoneticLookup("charlie");
// Chicago
```

## Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name. `.hasOwnProperty()` returns `true` or `false` if the property is found or not.

**Example**

```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
```

```js
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
```

## Manipulating Complex Objects

Sometimes you may want to store data in a flexible `Data Structure.` A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of `strings`, `numbers`, `booleans`, `arrays`, `functions`, and `objects`.

Here's an example of a complex data structure:

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP" ],
    "gold": true
  }
];
```
This is an array which contains one object inside. The object has various pieces of `metadata` about an album. It also has a nested `"formats"` array. If you want to add more album records, you can do this by adding records to the top level array.

Objects hold data in a property, which has a key-value format. In the example above, `"artist"`: `"Daft Punk"` is a property that has a key of `"artist"` and a value of `"Daft Punk"`.

JavaScript Object Notation or `JSON` is a related data interchange format used to store data.

```js
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```
**Note**

You will need to place a comma after every object in the array, unless it is the last object in the array.

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  },
  {
    "artist": "Rita Ora",
    "title": "Anywhere",
    "release_year": 2018,
    "formats": [
      "MP4",
      "wav"
    ],
    "gold": false
  }
  // Add record here
];
```

## Accessing Nested Objects

The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

```js
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"
```

```js
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
```