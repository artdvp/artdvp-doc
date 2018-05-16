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
  return newStr = str.split("").reverse().join("");
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
  return num < 1 ? 1 : num * factorialize(num - 1);
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
function palindrome(str) {
  // Good luck!
  var newStr = str.replace(/\W|_/g, "").toLowerCase();
  var reverseStr = newStr.split("").reverse().join("");
  return newStr === reverseStr ? true : false;
}

console.log(palindrome("eye"));
// true
console.log(palindrome("_eye"));
// true
console.log(palindrome("race car"));
// true
console.log(palindrome("not a palindrome"));
// false
console.log(palindrome("A man, a plan, a canal. Panama"));
// true
console.log(palindrome("never odd or even"));
// true
console.log(palindrome("nope"));
// false
console.log(palindrome("almostomla"));
// false
console.log(palindrome("My age is 0, 0 si ega ym."));
// true
console.log(palindrome("1 eye for of 1 eye."));
// false
console.log(palindrome("0_0 (: /- :) 0-0"));
// true
console.log(palindrome("five|_/|four"));
// false
```

## Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
[String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

```js
function findLongestWord(str) {
  var newArr = [];
  newArr = str.split(" ").map(function(val) { 
      return val.length; 
    }).sort(function(a, b) { 
      return b - a;
    });
  return newArr.length > 1 ? newArr[0] : 0;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 6
console.log(findLongestWord("May the force be with you"));
// 5
console.log(findLongestWord("Google do a barrel roll"));
// 6
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
// 8
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
// 19
```

## Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

```js
function titleCase(str) {
  var newStr = "";
  newStr = str.toLowerCase().split(" ").map(function(val) {
      return val.charAt(0).toUpperCase() + val.substr(1);
    }).join(" ");
  return newStr;
}

console.log(titleCase("I'm a little tea pot"));
// I'm A Little Tea Pot
console.log(titleCase("I'm a little tea pot"));
// I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));
// Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
// Here Is My Handle Here Is My Spout
```

## Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

```js
function largestOfFour(arr) {
  // You can do this!
  var Arr = [];
  Arr = arr.map(function(val) {
    return val.sort(function(a, b) {
      return b - a;
    })[0];
  });
  return Arr;
}

function largestOfFour2(arr) {
  // You can do this!
  var Arr = [];
  Arr = arr.map(function(val) {
    var largest = val[0];
    for (var i = 0; i < val.length; i++) {
      if (largest < val[i]) {
        largest = val[i];
      }
    }
    return largest;
  });
  return Arr;
}

console.log(largestOfFour([[4, 5, 1, 3],[13, 27, 18, 26],[32, 35, 37, 39],[1000, 1001, 857, 1]]))
// [ 5, 27, 39, 1001 ]
console.log(largestOfFour([[13, 27, 18, 26],[4, 5, 1, 3],[32, 35, 37, 39],[1000, 1001, 857, 1]]))
// [ 27, 5, 39, 1001 ]
console.log(largestOfFour([[4, 9, 1, 3],[13, 35, 18, 26],[32, 35, 97, 39],[1000000, 1001, 857, 1]]))
// [ 9, 35, 97, 1000000 ]
```

## Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[String.prototype.substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
[String.prototype.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var newStr = str.substr(target.length * -1);
  return newStr === target ? true : false;
}

console.log(confirmEnding("Bastian", "n"));
// true
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen","specification"));
// false
console.log(confirmEnding("He has to give me a new name", "name"));
// true
console.log(confirmEnding("Open sesame", "same"));
// true
console.log(confirmEnding("Open sesame", "pen"));
// false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing","mountain"));
// false
```

## Repeat a string repeat a string Incomplete

Repeat a given string (first argument) `num` times (second argument). Return an empty string if `num` is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[Global String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

```js
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = "";
  if (num < 0) {
    return "";
  } else {
    for (var i = 0; i < num; i++) {
      newStr += str;
    }
    return newStr;
  }
}

console.log(repeatStringNumTimes("abc", 3))
// abcabcabc
console.log(repeatStringNumTimes("*", 3))
// ***
console.log(repeatStringNumTimes("abc", 4))
// abcabcabcabc
console.log(repeatStringNumTimes("abc", 1))
// abc
console.log(repeatStringNumTimes("*", 8))
// ********
console.log(repeatStringNumTimes("abc", -2))
// ""
```

## Truncate a string

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length `num` is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)


```js
function truncateString(str, num) {
    // Clear out that junk in your trunk
    var newStr = "";
    if (num <= 3) {
        newStr = str.slice(0, num) + "...";
    } else if (num >= str.length) {
        newStr = str;
    } else {
        newStr = str.slice(0, num - 3) + "...";
    }
    return newStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11))
// A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14))
// Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
// A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
// A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1))
// A...
console.log(truncateString("Absolutely Longer", 2))
// Ab...
```

### Chunky Monkey Incomplete   *

Write a function that splits an array (first argument) into groups the length of `size` (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

[Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
[Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

<!--

## Slasher Flick Incomplete   *

## Mutations Incomplete   *

## Falsy Bouncer Incomplete   *

## Seek and Destroy Incomplete   *

## Where do I belong Incomplete   *

## Caesars Cipher Incomplete   * -->
