# Basic Javascript

## Comment your JavaScript Code

Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

Using `//` will tell JavaScript to ignore the remainder of the text on the current line:

`// This is an in-line comment.`

You can make a multi-line comment beginning with `/* and ending with */`:

```js
/* This is a 
   multi-line comment */
```

**Best Practice**

As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others and for your future self.

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

`Variable` names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

```js
// Example
var ourName;

// Define myName below this line
var myName;
```