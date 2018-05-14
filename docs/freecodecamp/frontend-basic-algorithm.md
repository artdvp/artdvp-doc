# Basic Algorithm Scripting

## Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[Global String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
[String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
[Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
[Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

> Solve

```js
function reverseString(str) {
  var newStr = "";
  return newStr = str.split('').reverse().join('');
}

reverseString("hello");
// olleh
```

## Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

```js
function factorialize(num) {
  if(num < 1){
    return 1;    
  } else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);
// 120
```

## Check for Palindromes

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A `palindrome` is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**

You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`, and `"2_A3*3#A2"`.

Remember to use `Read-Search-Ask` if you get stuck. Write your own code.

Here are some helpful links:

[String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
[String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

```js
// thinking.....?
```

<!-- 
## Find the Longest Word in a String Incomplete   *

## Title Case a Sentence Incomplete   *

## Return Largest Numbers in Arrays Incomplete   *

## Confirm the Ending Incomplete   *

## Repeat a string repeat a string Incomplete   *

## Truncate a string Incomplete   *

### Chunky Monkey Incomplete   *

## Slasher Flick Incomplete   *

## Mutations Incomplete   *

## Falsy Bouncer Incomplete   *

## Seek and Destroy Incomplete   *

## Where do I belong Incomplete   *

## Caesars Cipher Incomplete   * -->