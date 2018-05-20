# Basic Algorithm Scripting

## Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

- [Global String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

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

- [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

> Solve

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

- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

> Solve

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

- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

> Solve

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

- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

> Solve

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

- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

> Solve

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

- [String.prototype.substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
- [String.prototype.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

> Solve

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

- [Global String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

> Solve

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

- [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

> Solve

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

### Chunky Monkey

Write a function that splits an array (first argument) into groups the length of `size` (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

> Solve

```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
// [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// [[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
// [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
// [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
```

## Slasher Flick

Return the remaining elements of an array after chopping off `n` elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

- [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

> Solve

```js
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2))
// [3]
console.log(slasher([1, 2, 3], 0))
// [1, 2, 3]
console.log(slasher([1, 2, 3], 9))
// []
console.log(slasher([1, 2, 3], 4))
// []
console.log(slasher(["burgers", "fries", "shake"], 1))
// ["fries", "shake"]
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5))
// ["cheese", 4]
```


## Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".

Lastly, `["Alien", "line"]`, should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

- [String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

> Solve

```js
function mutation(arr) {
    var arr0 = arr.length > 1 ? arr[1].toLowerCase().split("") : [];
    for (var i = 0; i < arr0.length; i++) {
        if (arr[0].toLowerCase().indexOf(arr0[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]))
// false
console.log(mutation(["hello", "Hello"]))
// true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
// true
console.log(mutation(["Mary", "Army"]))
// true
console.log(mutation(["Mary", "Aarmy"]))
// true
console.log(mutation(["Alien", "line"]))
// true
console.log(mutation(["floor", "for"]))
// true
console.log(mutation(["hello", "neo"]))
// false
```

## Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

- [Boolean Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

> Solve

```js
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var newArr = arr.filter(function (val) {
        return val;
    });
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]))
// [ 7, 'ate', 9 ]
console.log(bouncer(["a", "b", "c"]))
// [ 'a', 'b', 'c' ]
console.log(bouncer([false, null, 0, NaN, undefined, ""]))
// []
console.log(bouncer([1, null, NaN, 2, undefined]))
// [ 1, 2 ]
```

## Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

- [Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

> Solve

```js
function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments);
    var arr1 = args.slice(1);
    return args[0].filter(function (val) {
        if (arr1.indexOf(val) === -1) {
            return val;
        }
    });
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// [ 1, 1 ]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
// [ 1, 5, 1 ]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
// [ 1 ]
console.log(destroyer([2, 3, 2, 3], 2, 3))
// []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
// [ 'hamburger' ]
```


## Where do I belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

- [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

> Solve

```js
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    var val = arr.sort(function (a, b) {
        return a - b;
    }).indexOf(num);
    return val;
}

console.log(getIndexToIns([40, 60], 50))
// 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
// 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
// 2
console.log(getIndexToIns([40, 60], 50))
// 1
console.log(getIndexToIns([3, 10, 5], 3))
// 0
console.log(getIndexToIns([5, 3, 20, 3], 5))
// 2
console.log(getIndexToIns([2, 20, 10], 19))
// 2
console.log(getIndexToIns([2, 5, 10], 15))
// 3
```
## Caesars Cipher

One of the simplest and most widely known `ciphers` is a `Caesar cipher`, also known as a `shift cipher`. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

> Solve

```js
function rot13(str) { // LBH QVQ VG!
    var newArr = [];
    newArr = str.split("").map(function (val) {
        var newval = val;
        var aASCII = val.charCodeAt(0);
        if ((aASCII >= 65 && aASCII <= 77) || (aASCII >= 97 && aASCII <= 109)) {
            aASCII += 13;
            newval = String.fromCharCode(aASCII);
        } else if ((aASCII >= 78 && aASCII <= 90) || (aASCII >= 110 && aASCII <= 122)) {
            aASCII -= 13;
            newval = String.fromCharCode(aASCII);
        }
        return newval;
    }).join("");
    return newArr;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"))
// FREE CODE CAMP
console.log(rot13("SERR CVMMN!"))
// FREE PIZZA!
console.log(rot13("SERR YBIR?"))
// FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."))
// THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
```

----